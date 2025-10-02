import { useState } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { useLanguageStore } from '@/store/useLanguageStore';
import { downloadAsZip, generateOutputFileName } from '@/lib/zip';
import Button from './ui/Button';
import CompressorWorker from '@/workers/compressor.worker?worker';
import type { WorkerRequest, WorkerResponse } from '@/workers/compressor.worker';

export default function Toolbar() {
  const tasks = useAppStore((state) => state.tasks);
  const params = useAppStore((state) => state.params);
  const concurrency = useAppStore((state) => state.concurrency);
  const isProcessing = useAppStore((state) => state.isProcessing);
  const setIsProcessing = useAppStore((state) => state.setIsProcessing);
  const updateTaskStatus = useAppStore((state) => state.updateTaskStatus);
  const updateTaskProgress = useAppStore((state) => state.updateTaskProgress);
  const clearCompleted = useAppStore((state) => state.clearCompleted);
  const clearTasks = useAppStore((state) => state.clearTasks);
  const t = useLanguageStore((state) => state.t);

  const [workers, setWorkers] = useState<Worker[]>([]);

  // 统计
  const pendingCount = tasks.filter((t) => t.status === 'pending').length;
  const processingCount = tasks.filter((t) => t.status === 'processing').length;
  const completedCount = tasks.filter((t) => t.status === 'completed').length;
  const failedCount = tasks.filter((t) => t.status === 'failed').length;

  const canStart = tasks.length > 0 && !isProcessing && pendingCount > 0;

  // 开始压缩
  const handleStart = async () => {
    if (!canStart) return;

    console.log('🚀 开始压缩，待处理任务数:', pendingCount);
    setIsProcessing(true);

    // 创建 Worker 池
    const workerPool: Worker[] = [];
    for (let i = 0; i < concurrency; i++) {
      const worker = new CompressorWorker();
      console.log(`✅ 创建 Worker ${i + 1}`);
      workerPool.push(worker);
    }
    setWorkers(workerPool);

    // 待处理任务队列
    const queue = tasks.filter((t) => t.status === 'pending');
    let currentIndex = 0;
    const progressIntervals = new Map<string, number>();

    // Worker 消息处理
    const processNextTask = (worker: Worker, workerIndex: number) => {
      if (currentIndex >= queue.length) {
        console.log(`⏹️ Worker ${workerIndex + 1} 无更多任务`);
        return;
      }

      const task = queue[currentIndex++];
      console.log(`📝 Worker ${workerIndex + 1} 开始处理: ${task.file.name}`);
      
      // 更新状态为处理中
      updateTaskStatus(task.id, 'processing');
      
      let progress = 10;
      updateTaskProgress(task.id, progress);

      const request: WorkerRequest = {
        id: task.id,
        file: task.file,
        params: task.paramsSnapshot,
      };

      console.log(`📤 发送任务到 Worker:`, { id: task.id, fileName: task.file.name });
      worker.postMessage(request);

      // 模拟进度更新
      const progressInterval = setInterval(() => {
        progress = Math.min(90, progress + 10);
        updateTaskProgress(task.id, progress);
      }, 200);
      progressIntervals.set(task.id, progressInterval);

      // 设置消息处理器（每次都重新设置）
      worker.onmessage = (e: MessageEvent<WorkerResponse>) => {
        const response = e.data;
        console.log(`📥 收到 Worker 响应:`, response);

        const interval = progressIntervals.get(response.id);
        if (interval) {
          clearInterval(interval);
          progressIntervals.delete(response.id);
        }

        if (response.ok && response.blob && response.meta) {
          console.log(`✅ 压缩成功: ${task.file.name}, 大小: ${response.blob.size}`);
          // 成功
          updateTaskStatus(response.id, 'completed', {
            resultBlob: response.blob,
            progress: 100,
            meta: {
              originalSize: task.file.size,
              compressedSize: response.blob.size,
              compressedWidth: response.meta.width,
              compressedHeight: response.meta.height,
              processingTime: response.meta.time,
            },
          });
        } else {
          console.error(`❌ 压缩失败: ${task.file.name}`, response.error);
          // 失败
          updateTaskStatus(response.id, 'failed', {
            error: response.error || '压缩失败',
            progress: 0,
          });
        }

        // 处理下一个任务
        processNextTask(worker, workerIndex);
      };

      worker.onerror = (error) => {
        console.error(`❌ Worker 错误:`, error);
        const interval = progressIntervals.get(task.id);
        if (interval) {
          clearInterval(interval);
          progressIntervals.delete(task.id);
        }
        updateTaskStatus(task.id, 'failed', {
          error: `处理出错: ${error.message || '未知错误'}`,
          progress: 0,
        });
        processNextTask(worker, workerIndex);
      };
    };

    // 启动所有 Worker
    workerPool.forEach((worker, index) => {
      processNextTask(worker, index);
    });

    // 等待所有任务完成
    const checkInterval = setInterval(() => {
      const currentTasks = useAppStore.getState().tasks;
      const stillProcessing = currentTasks.some((t) => t.status === 'processing');
      if (!stillProcessing && currentIndex >= queue.length) {
        console.log('🎉 所有任务完成');
        clearInterval(checkInterval);
        setIsProcessing(false);
        // 清理 Worker
        workerPool.forEach((w) => w.terminate());
        setWorkers([]);
        // 清理所有进度定时器
        progressIntervals.forEach((interval) => clearInterval(interval));
        progressIntervals.clear();
      }
    }, 500);
  };

  // 导出 ZIP
  const handleExportZip = async () => {
    const completedTasks = tasks.filter((t) => t.status === 'completed' && t.resultBlob);

    if (completedTasks.length === 0) {
      alert(t.messages.noCompleted);
      return;
    }

    try {
      const files = completedTasks.map((task) => ({
        name: generateOutputFileName(
          task.file.name,
          task.paramsSnapshot.format,
          task.meta?.compressedWidth || 0,
          task.meta?.compressedHeight || 0,
          task.paramsSnapshot.quality
        ),
        blob: task.resultBlob!,
      }));

      await downloadAsZip(files, `picpress-${Date.now()}.zip`);
    } catch (error) {
      alert(t.messages.exportFailed + ': ' + (error as Error).message);
    }
  };

  return (
    <div className="card p-6 rounded-2xl shadow-lg">
      {/* 统计信息 */}
      <div className="mb-6 grid grid-cols-4 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-gray-800">{tasks.length}</p>
          <p className="text-xs text-gray-500">{t.toolbar.total}</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-yellow-600">{pendingCount + processingCount}</p>
          <p className="text-xs text-gray-500">{t.toolbar.pending}</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-green-600">{completedCount}</p>
          <p className="text-xs text-gray-500">{t.toolbar.completed}</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-red-600">{failedCount}</p>
          <p className="text-xs text-gray-500">{t.toolbar.failed}</p>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="space-y-3">
        <div className="flex gap-3">
          <Button
            variant="primary"
            className="flex-1"
            onClick={handleStart}
            disabled={!canStart}
          >
            {isProcessing ? t.toolbar.processing : t.toolbar.startCompress}
          </Button>

          <Button
            variant="secondary"
            onClick={handleExportZip}
            disabled={completedCount === 0}
          >
            {t.toolbar.exportZip}
          </Button>
        </div>

        <div className="flex gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="flex-1"
            onClick={clearCompleted}
            disabled={completedCount === 0}
          >
            {t.toolbar.clearCompleted}
          </Button>

          <Button
            variant="danger"
            size="sm"
            className="flex-1"
            onClick={clearTasks}
            disabled={tasks.length === 0}
          >
            {t.toolbar.clearAll}
          </Button>
        </div>
      </div>

      {/* 并发设置 */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">{t.toolbar.concurrency}</span>
          <span className="font-medium">{concurrency}</span>
        </div>
      </div>
    </div>
  );
}

