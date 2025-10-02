import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useAppStore } from '@/store/useAppStore';
import { useLanguageStore } from '@/store/useLanguageStore';

const ACCEPTED_FORMATS = {
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'image/webp': ['.webp'],
  'image/avif': ['.avif'],
  'image/gif': ['.gif'],
};

export default function DropZone() {
  const addFiles = useAppStore((state) => state.addFiles);
  const t = useLanguageStore((state) => state.t);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: any[]) => {
      setError(null);

      if (rejectedFiles.length > 0) {
        setError(`${rejectedFiles.length} ${t.messages.unsupportedFormat}`);
        return;
      }

      if (acceptedFiles.length > 0) {
        addFiles(acceptedFiles);
      }
    },
    [addFiles, t]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_FORMATS,
    multiple: true,
  });

  return (
    <div className="space-y-2">
      <div
        {...getRootProps()}
        className={`card p-12 rounded-2xl border-2 border-dashed transition-all cursor-pointer
          ${isDragActive ? 'border-brand-accent bg-brand-accent/10 scale-[1.02]' : 'border-gray-300 hover:border-brand-accent/50'}
        `}
        role="button"
        aria-label={t.dropzone.title}
        tabIndex={0}
      >
        <input {...getInputProps()} />
        <div className="text-center">
          <div className="text-6xl mb-4">📸</div>
          <h3 className="text-xl font-medium mb-2">
            {isDragActive ? t.dropzone.titleActive : t.dropzone.title}
          </h3>
          <p className="text-gray-500 text-sm">
            {t.dropzone.subtitle}
          </p>
          <p className="text-gray-400 text-xs mt-2">
            {t.dropzone.hint}
          </p>
        </div>
      </div>
      
      {error && (
        <div className="px-4 py-2 bg-red-100 text-red-700 rounded-xl text-sm">
          {error}
        </div>
      )}
    </div>
  );
}

