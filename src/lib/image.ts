export type ImageFormat = 'jpeg' | 'png' | 'webp' | 'avif';

export interface CompressionParams {
  format: ImageFormat;
  quality: number;
  maxWidth: number;
  maxHeight: number;
  keepEXIF?: boolean;
}

export interface ImageSize {
  width: number;
  height: number;
}

/**
 * 计算目标尺寸（保持宽高比）
 */
export function computeTargetSize(
  srcWidth: number,
  srcHeight: number,
  params: CompressionParams
): ImageSize {
  const { maxWidth, maxHeight } = params;

  // 如果都为 0 或未设置，保持原尺寸
  if ((!maxWidth || maxWidth === 0) && (!maxHeight || maxHeight === 0)) {
    return { width: srcWidth, height: srcHeight };
  }

  let width = srcWidth;
  let height = srcHeight;

  // 按最长边限制
  if (maxWidth > 0) {
    const longestSide = Math.max(width, height);
    if (longestSide > maxWidth) {
      const scale = maxWidth / longestSide;
      width = Math.round(width * scale);
      height = Math.round(height * scale);
    }
  }

  // 如果还指定了最大高度
  if (maxHeight > 0 && height > maxHeight) {
    const scale = maxHeight / height;
    width = Math.round(width * scale);
    height = Math.round(height * scale);
  }

  return { width, height };
}

/**
 * 获取 MIME 类型
 */
export function getMimeType(format: ImageFormat): string {
  const mimeMap: Record<ImageFormat, string> = {
    jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
    avif: 'image/avif',
  };
  return mimeMap[format] || 'image/jpeg';
}

/**
 * 格式化文件大小
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}

/**
 * 计算压缩比
 */
export function calculateCompressionRatio(originalSize: number, compressedSize: number): number {
  if (originalSize === 0) return 0;
  return Math.round(((originalSize - compressedSize) / originalSize) * 100);
}

/**
 * 检测浏览器是否支持某个图片格式
 */
export function isSupportedFormat(format: ImageFormat): boolean {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  const mimeType = getMimeType(format);
  return canvas.toDataURL(mimeType).startsWith(`data:${mimeType}`);
}

