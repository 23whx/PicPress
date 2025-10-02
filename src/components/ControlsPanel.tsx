import { useAppStore } from '@/store/useAppStore';
import { useLanguageStore } from '@/store/useLanguageStore';
import type { ImageFormat } from '@/lib/image';

export default function ControlsPanel() {
  const params = useAppStore((state) => state.params);
  const setFormat = useAppStore((state) => state.setFormat);
  const setQuality = useAppStore((state) => state.setQuality);
  const setMaxWidth = useAppStore((state) => state.setMaxWidth);
  const setMaxHeight = useAppStore((state) => state.setMaxHeight);
  const setKeepEXIF = useAppStore((state) => state.setKeepEXIF);
  const t = useLanguageStore((state) => state.t);

  return (
    <div className="card p-6 rounded-2xl shadow-lg space-y-6">
      <h3 className="text-lg font-medium mb-4">{t.controls.title}</h3>

      {/* 输出格式 */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          {t.controls.format}
        </label>
        <select
          value={params.format}
          onChange={(e) => setFormat(e.target.value as ImageFormat)}
          className="w-full px-4 py-2 rounded-xl bg-brand-accent/30 border-none focus:ring-2 focus:ring-brand-accent transition-all"
        >
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WebP</option>
          <option value="avif">AVIF</option>
        </select>
      </div>

      {/* 质量 */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-gray-700">
            {t.controls.quality}
          </label>
          <span className="text-sm font-medium text-brand-accent">
            {params.quality}
          </span>
        </div>
        <input
          type="range"
          min={1}
          max={100}
          value={params.quality}
          onChange={(e) => setQuality(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-accent"
          style={{
            background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${params.quality}%, #e5e7eb ${params.quality}%, #e5e7eb 100%)`
          }}
        />
        <div className="flex justify-between text-xs text-gray-400">
          <span>{t.controls.minQuality}</span>
          <span>{t.controls.maxQuality}</span>
        </div>
      </div>

      {/* 尺寸调整 */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label className="block text-sm font-medium text-gray-700">
            {t.controls.maxWidth}
          </label>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
            {t.controls.lockRatio}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            min={0}
            value={params.maxWidth || ''}
            onChange={(e) => setMaxWidth(Number(e.target.value) || 0)}
            className="flex-1 px-4 py-2 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
            placeholder={t.controls.placeholder.maxWidth}
          />
          <span className="text-sm text-gray-500">px</span>
        </div>
        <p className="text-xs text-gray-400">
          {t.controls.hint.maxWidth}
        </p>
      </div>

      {/* 高度限制 */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          {t.controls.maxHeight}
        </label>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            min={0}
            value={params.maxHeight || ''}
            onChange={(e) => setMaxHeight(Number(e.target.value) || 0)}
            className="flex-1 px-4 py-2 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
            placeholder={t.controls.placeholder.maxHeight}
          />
          <span className="text-sm text-gray-500">px</span>
        </div>
        <p className="text-xs text-gray-400">
          {t.controls.hint.maxHeight}
        </p>
      </div>

      {/* 保留 EXIF */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="keepEXIF"
          checked={params.keepEXIF}
          onChange={(e) => setKeepEXIF(e.target.checked)}
          className="w-4 h-4 rounded accent-brand-accent cursor-pointer"
        />
        <label htmlFor="keepEXIF" className="text-sm text-gray-700 cursor-pointer">
          {t.controls.keepEXIF}
        </label>
      </div>

      {/* 预设按钮 */}
      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm font-medium text-gray-700 mb-3">{t.controls.presets}</p>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => {
              setFormat('png');
              setQuality(90);
              setMaxWidth(0);
            }}
            className="px-3 py-2 text-xs bg-gray-100 hover:bg-brand-accent/30 rounded-lg transition-colors"
          >
            {t.controls.highQuality}
          </button>
          <button
            onClick={() => {
              setFormat('png');
              setQuality(80);
              setMaxWidth(1920);
            }}
            className="px-3 py-2 text-xs bg-gray-100 hover:bg-brand-accent/30 rounded-lg transition-colors"
          >
            {t.controls.balanced}
          </button>
          <button
            onClick={() => {
              setFormat('png');
              setQuality(60);
              setMaxWidth(1280);
            }}
            className="px-3 py-2 text-xs bg-gray-100 hover:bg-brand-accent/30 rounded-lg transition-colors"
          >
            {t.controls.fastCompress}
          </button>
        </div>
      </div>
    </div>
  );
}

