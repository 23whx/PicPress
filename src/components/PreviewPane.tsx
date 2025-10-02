import { useState } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { useLanguageStore } from '@/store/useLanguageStore';
import { formatFileSize, calculateCompressionRatio } from '@/lib/image';

export default function PreviewPane() {
  const selectedTaskId = useAppStore((state) => state.selectedTaskId);
  const tasks = useAppStore((state) => state.tasks);
  const t = useLanguageStore((state) => state.t);
  const [showOriginal, setShowOriginal] = useState(false);

  const selectedTask = tasks.find((task) => task.id === selectedTaskId);

  if (!selectedTask) {
    return (
      <div className="card p-8 rounded-2xl text-center">
        <div className="text-6xl mb-4">🖼️</div>
        <p className="text-gray-500">{t.preview.empty}</p>
      </div>
    );
  }

  const hasResult = selectedTask.status === 'completed' && selectedTask.resultBlob;
  const resultURL = hasResult ? URL.createObjectURL(selectedTask.resultBlob!) : null;

  const compressionRatio = selectedTask.meta?.compressedSize
    ? calculateCompressionRatio(selectedTask.meta.originalSize, selectedTask.meta.compressedSize)
    : 0;

  return (
    <div className="card rounded-2xl overflow-hidden">
      {/* 头部 */}
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{t.preview.title}</h3>
          {hasResult && (
            <div className="flex gap-2">
              <button
                onClick={() => setShowOriginal(false)}
                className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                  !showOriginal
                    ? 'bg-brand-accent text-gray-800'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {t.preview.compressed}
              </button>
              <button
                onClick={() => setShowOriginal(true)}
                className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                  showOriginal
                    ? 'bg-brand-accent text-gray-800'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {t.preview.original}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 图片预览 */}
      <div className="p-4 bg-gray-100 min-h-[300px] flex items-center justify-center">
        <div className="max-w-full max-h-[400px] overflow-auto">
          <img
            src={showOriginal || !hasResult ? selectedTask.srcURL : resultURL!}
            alt={selectedTask.file.name}
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* 统计信息 */}
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-2 gap-4 text-sm">
          {/* 原始信息 */}
          <div className="space-y-1">
            <p className="text-gray-500 text-xs">{t.preview.originalSize}</p>
            <p className="font-medium">
              {formatFileSize(selectedTask.meta?.originalSize || 0)}
            </p>
          </div>

          {/* 压缩后信息 */}
          {hasResult && selectedTask.meta?.compressedSize && (
            <div className="space-y-1">
              <p className="text-gray-500 text-xs">{t.preview.compressedSize}</p>
              <p className="font-medium text-green-600">
                {formatFileSize(selectedTask.meta.compressedSize)}
              </p>
            </div>
          )}

          {/* 尺寸 */}
          {selectedTask.meta?.compressedWidth && selectedTask.meta?.compressedHeight && (
            <>
              <div className="space-y-1">
                <p className="text-gray-500 text-xs">{t.preview.outputSize}</p>
                <p className="font-medium">
                  {selectedTask.meta.compressedWidth} × {selectedTask.meta.compressedHeight}
                </p>
              </div>

              {/* 压缩率 */}
              {hasResult && (
                <div className="space-y-1">
                  <p className="text-gray-500 text-xs">{t.preview.compressionRatio}</p>
                  <p className="font-medium text-green-600">
                    {t.fileList.reduced} {compressionRatio}%
                  </p>
                </div>
              )}
            </>
          )}

          {/* 处理时间 */}
          {selectedTask.meta?.processingTime && (
            <div className="space-y-1">
              <p className="text-gray-500 text-xs">{t.preview.processingTime}</p>
              <p className="font-medium">
                {(selectedTask.meta.processingTime / 1000).toFixed(2)}s
              </p>
            </div>
          )}
        </div>

        {/* 参数快照 */}
        <div className="pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-2">{t.preview.params}</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 bg-gray-100 rounded">
              {selectedTask.paramsSnapshot.format.toUpperCase()}
            </span>
            <span className="px-2 py-1 bg-gray-100 rounded">
              {t.controls.quality} {selectedTask.paramsSnapshot.quality}
            </span>
            {selectedTask.paramsSnapshot.maxWidth > 0 ? (
              <span className="px-2 py-1 bg-gray-100 rounded">
                {t.controls.maxWidth} {selectedTask.paramsSnapshot.maxWidth}px
              </span>
            ) : (
              <span className="px-2 py-1 bg-gray-100 rounded">
                {t.preview.originalDimension}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

