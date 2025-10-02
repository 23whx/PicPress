import type { CompressionParams } from '../lib/image';
import { computeTargetSize, getMimeType } from '../lib/image';

export interface WorkerRequest {
  id: string;
  file: File;
  params: CompressionParams;
}

export interface WorkerResponse {
  id: string;
  ok: boolean;
  blob?: Blob;
  meta?: {
    width: number;
    height: number;
    time: number;
  };
  error?: string;
}

/**
 * 检测是否支持 OffscreenCanvas
 */
const supportsOffscreenCanvas = typeof OffscreenCanvas !== 'undefined';

/**
 * 压缩图片
 */
async function compressImage(file: File, params: CompressionParams): Promise<{
  blob: Blob;
  width: number;
  height: number;
}> {
  // 创建 ImageBitmap
  const bitmap = await createImageBitmap(file);
  
  // 计算目标尺寸
  const { width, height } = computeTargetSize(
    bitmap.width,
    bitmap.height,
    params
  );

  // 使用 OffscreenCanvas 或降级到主线程 Canvas
  if (supportsOffscreenCanvas) {
    const canvas = new OffscreenCanvas(width, height);
    const ctx = canvas.getContext('2d', { alpha: true });
    
    if (!ctx) {
      throw new Error('无法获取 Canvas 上下文');
    }

    // 绘制图片
    ctx.drawImage(bitmap, 0, 0, width, height);
    
    // 转换为 Blob
    const mimeType = getMimeType(params.format);
    const quality = params.quality / 100;
    
    let blob: Blob;
    
    // 尝试使用 convertToBlob（更新的 API）
    if ('convertToBlob' in canvas) {
      blob = await (canvas as any).convertToBlob({
        type: mimeType,
        quality,
      });
    } else {
      // 降级到 toBlob
      throw new Error('OffscreenCanvas.convertToBlob 不支持，需要降级处理');
    }
    
    bitmap.close();
    
    return { blob, width, height };
  } else {
    throw new Error('不支持 OffscreenCanvas，需要在主线程处理');
  }
}

/**
 * Worker 消息处理
 */
self.onmessage = async (e: MessageEvent<WorkerRequest>) => {
  const { id, file, params } = e.data;
  const startTime = performance.now();

  console.log(`🔧 Worker 收到任务:`, { id, fileName: file.name, size: file.size, params });

  try {
    console.log(`⚙️ Worker 开始压缩: ${file.name}`);
    const { blob, width, height } = await compressImage(file, params);
    const time = performance.now() - startTime;

    console.log(`✅ Worker 压缩完成: ${file.name}, 耗时: ${time.toFixed(2)}ms`);

    const response: WorkerResponse = {
      id,
      ok: true,
      blob,
      meta: {
        width,
        height,
        time,
      },
    };

    self.postMessage(response);
  } catch (error) {
    console.error(`❌ Worker 压缩失败:`, error);
    const response: WorkerResponse = {
      id,
      ok: false,
      error: error instanceof Error ? error.message : '未知错误',
    };

    self.postMessage(response);
  }
};

