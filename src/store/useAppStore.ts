import { create } from 'zustand';
import type { CompressionParams, ImageFormat } from '@/lib/image';

export type TaskStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';

export interface FileTask {
  id: string;
  file: File;
  srcURL: string;
  resultBlob?: Blob;
  status: TaskStatus;
  progress: number;
  error?: string;
  meta?: {
    originalSize: number;
    compressedSize?: number;
    originalWidth?: number;
    originalHeight?: number;
    compressedWidth?: number;
    compressedHeight?: number;
    processingTime?: number;
  };
  paramsSnapshot: CompressionParams;
}

interface AppState {
  // 文件任务列表
  tasks: FileTask[];
  
  // 压缩参数
  params: CompressionParams;
  
  // 并发控制
  concurrency: number;
  
  // 全局状态
  isProcessing: boolean;
  isPaused: boolean;
  
  // 预览选中的任务
  selectedTaskId: string | null;

  // Actions
  addFiles: (files: File[]) => void;
  removeTask: (id: string) => void;
  clearTasks: () => void;
  updateTaskStatus: (id: string, status: TaskStatus, data?: Partial<FileTask>) => void;
  updateTaskProgress: (id: string, progress: number) => void;
  
  setFormat: (format: ImageFormat) => void;
  setQuality: (quality: number) => void;
  setMaxWidth: (maxWidth: number) => void;
  setMaxHeight: (maxHeight: number) => void;
  setKeepEXIF: (keepEXIF: boolean) => void;
  
  setConcurrency: (concurrency: number) => void;
  setIsProcessing: (isProcessing: boolean) => void;
  setIsPaused: (isPaused: boolean) => void;
  
  setSelectedTaskId: (id: string | null) => void;
  
  // 批量操作
  clearCompleted: () => void;
  retryFailed: () => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  tasks: [],
  
  params: {
    format: 'png',
    quality: 80,
    maxWidth: 0,
    maxHeight: 0,
    keepEXIF: false,
  },
  
  concurrency: 3,
  isProcessing: false,
  isPaused: false,
  selectedTaskId: null,

  addFiles: (files) => {
    const currentParams = get().params;
    const newTasks: FileTask[] = files.map((file) => ({
      id: `${file.name}-${Date.now()}-${Math.random()}`,
      file,
      srcURL: URL.createObjectURL(file),
      status: 'pending',
      progress: 0,
      meta: {
        originalSize: file.size,
      },
      paramsSnapshot: { ...currentParams },
    }));

    set((state) => ({
      tasks: [...state.tasks, ...newTasks],
    }));
  },

  removeTask: (id) => {
    const task = get().tasks.find((t) => t.id === id);
    if (task) {
      URL.revokeObjectURL(task.srcURL);
      if (task.resultBlob) {
        URL.revokeObjectURL(URL.createObjectURL(task.resultBlob));
      }
    }
    
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
      selectedTaskId: state.selectedTaskId === id ? null : state.selectedTaskId,
    }));
  },

  clearTasks: () => {
    const tasks = get().tasks;
    tasks.forEach((task) => {
      URL.revokeObjectURL(task.srcURL);
      if (task.resultBlob) {
        URL.revokeObjectURL(URL.createObjectURL(task.resultBlob));
      }
    });
    
    set({
      tasks: [],
      selectedTaskId: null,
    });
  },

  updateTaskStatus: (id, status, data) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, status, ...data } : task
      ),
    }));
  },

  updateTaskProgress: (id, progress) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, progress } : task
      ),
    }));
  },

  setFormat: (format) => {
    set((state) => ({
      params: { ...state.params, format },
    }));
  },

  setQuality: (quality) => {
    set((state) => ({
      params: { ...state.params, quality },
    }));
  },

  setMaxWidth: (maxWidth) => {
    set((state) => ({
      params: { ...state.params, maxWidth },
    }));
  },

  setMaxHeight: (maxHeight) => {
    set((state) => ({
      params: { ...state.params, maxHeight },
    }));
  },

  setKeepEXIF: (keepEXIF) => {
    set((state) => ({
      params: { ...state.params, keepEXIF },
    }));
  },

  setConcurrency: (concurrency) => {
    set({ concurrency });
  },

  setIsProcessing: (isProcessing) => {
    set({ isProcessing });
  },

  setIsPaused: (isPaused) => {
    set({ isPaused });
  },

  setSelectedTaskId: (id) => {
    set({ selectedTaskId: id });
  },

  clearCompleted: () => {
    const tasks = get().tasks;
    const completedTasks = tasks.filter((t) => t.status === 'completed');
    
    completedTasks.forEach((task) => {
      URL.revokeObjectURL(task.srcURL);
      if (task.resultBlob) {
        URL.revokeObjectURL(URL.createObjectURL(task.resultBlob));
      }
    });
    
    set((state) => ({
      tasks: state.tasks.filter((t) => t.status !== 'completed'),
    }));
  },

  retryFailed: () => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.status === 'failed' ? { ...task, status: 'pending', progress: 0, error: undefined } : task
      ),
    }));
  },
}));

