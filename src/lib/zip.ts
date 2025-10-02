import JSZip from 'jszip';

export interface ZipFileItem {
  name: string;
  blob: Blob;
}

/**
 * 触发浏览器下载
 */
function triggerDownload(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // 延迟释放 URL
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 100);
}

/**
 * 将多个文件打包成 ZIP 并下载
 */
export async function downloadAsZip(
  files: ZipFileItem[],
  zipFileName = 'compressed-images.zip'
): Promise<void> {
  if (files.length === 0) {
    throw new Error('没有文件可以打包');
  }

  const zip = new JSZip();

  // 添加所有文件到 ZIP
  files.forEach(({ name, blob }) => {
    zip.file(name, blob);
  });

  // 生成 ZIP 文件
  const zipBlob = await zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: {
      level: 6,
    },
  });

  // 下载
  triggerDownload(zipBlob, zipFileName);
}

/**
 * 下载单个文件
 */
export function downloadFile(blob: Blob, fileName: string): void {
  triggerDownload(blob, fileName);
}

/**
 * 生成输出文件名
 */
export function generateOutputFileName(
  originalName: string,
  format: string,
  width: number,
  height: number,
  quality: number
): string {
  // 移除原扩展名
  const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '');
  // 添加新的信息和扩展名
  const extension = format === 'jpeg' ? 'jpg' : format;
  return `${nameWithoutExt}_${width}x${height}_q${quality}.${extension}`;
}

