import { useAppStore } from '@/store/useAppStore';
import { useLanguageStore } from '@/store/useLanguageStore';
import { formatFileSize, calculateCompressionRatio } from '@/lib/image';
import { downloadFile, generateOutputFileName } from '@/lib/zip';
import ProgressBar from './ui/ProgressBar';

export default function FileList() {
  const tasks = useAppStore((state) => state.tasks);
  const removeTask = useAppStore((state) => state.removeTask);
  const setSelectedTaskId = useAppStore((state) => state.setSelectedTaskId);
  const selectedTaskId = useAppStore((state) => state.selectedTaskId);
  const t = useLanguageStore((state) => state.t);

  const handleDownload = (task: typeof tasks[0]) => {
    if (!task.resultBlob) return;

    const fileName = generateOutputFileName(
      task.file.name,
      task.paramsSnapshot.format,
      task.meta?.compressedWidth || 0,
      task.meta?.compressedHeight || 0,
      task.paramsSnapshot.quality
    );

    downloadFile(task.resultBlob, fileName);
  };

  if (tasks.length === 0) {
    return (
      <div className="card p-8 rounded-2xl text-center text-gray-500">
        <p>{t.fileList.empty}</p>
      </div>
    );
  }

  return (
    <div className="card rounded-2xl overflow-hidden">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h3 className="font-medium">{t.fileList.title} ({tasks.length})</h3>
      </div>
      
      <div className="max-h-[500px] overflow-y-auto">
        {tasks.map((task) => {
          const compressionRatio = task.meta?.compressedSize
            ? calculateCompressionRatio(task.meta.originalSize, task.meta.compressedSize)
            : 0;

          const statusIcons = {
            pending: '⏳',
            processing: '⚙️',
            completed: '✅',
            failed: '❌',
            cancelled: '🚫',
          };

          const isSelected = task.id === selectedTaskId;

          return (
            <div
              key={task.id}
              className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer
                ${isSelected ? 'bg-brand-accent/10' : ''}
              `}
              onClick={() => setSelectedTaskId(task.id)}
            >
              <div className="flex items-center gap-4">
                {/* 缩略图 */}
                <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={task.srcURL}
                    alt={task.file.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* 信息 */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{statusIcons[task.status]}</span>
                    <h4 className="text-sm font-medium truncate" title={task.file.name}>
                      {task.file.name}
                    </h4>
                  </div>

                  <div className="text-xs text-gray-500 space-y-1">
                    <div>
                      {t.fileList.original}: {formatFileSize(task.meta?.originalSize || 0)}
                      {task.meta?.compressedSize && (
                        <>
                          {' → '}
                          <span className="text-green-600 font-medium">
                            {formatFileSize(task.meta.compressedSize)}
                          </span>
                          {' '}
                          <span className="text-green-600">
                            ({t.fileList.reduced} {compressionRatio}%)
                          </span>
                        </>
                      )}
                    </div>
                    
                    {task.meta?.compressedWidth && task.meta?.compressedHeight && (
                      <div>
                        {t.fileList.size}: {task.meta.compressedWidth} × {task.meta.compressedHeight}
                      </div>
                    )}
                  </div>

                  {/* 进度条 */}
                  {task.status === 'processing' && (
                    <div className="mt-2">
                      <ProgressBar progress={task.progress} />
                    </div>
                  )}

                  {/* 错误信息 */}
                  {task.status === 'failed' && task.error && (
                    <div className="mt-2 text-xs text-red-600">
                      {task.error}
                    </div>
                  )}
                </div>

                {/* 操作按钮 */}
                <div className="flex-shrink-0 flex gap-2">
                  {task.status === 'completed' && task.resultBlob && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(task);
                      }}
                      className="px-3 py-1.5 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      title={t.fileList.download}
                    >
                      {t.fileList.download}
                    </button>
                  )}
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeTask(task.id);
                    }}
                    className="px-3 py-1.5 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    title={t.fileList.remove}
                  >
                    {t.fileList.remove}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

