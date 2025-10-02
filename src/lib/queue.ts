export interface QueueTask<T = any> {
  id: string;
  data: T;
  priority?: number;
}

export class TaskQueue<T = any> {
  private queue: QueueTask<T>[] = [];
  private running = 0;
  private concurrency: number;
  private paused = false;

  constructor(concurrency = 3) {
    this.concurrency = concurrency;
  }

  /**
   * 添加任务到队列
   */
  enqueue(task: QueueTask<T>): void {
    this.queue.push(task);
    this.queue.sort((a, b) => (b.priority || 0) - (a.priority || 0));
  }

  /**
   * 从队列中取出下一个任务
   */
  dequeue(): QueueTask<T> | undefined {
    return this.queue.shift();
  }

  /**
   * 获取下一个待执行的任务（不移除）
   */
  peek(): QueueTask<T> | undefined {
    return this.queue[0];
  }

  /**
   * 队列是否为空
   */
  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  /**
   * 队列长度
   */
  size(): number {
    return this.queue.length;
  }

  /**
   * 当前运行中的任务数
   */
  getRunning(): number {
    return this.running;
  }

  /**
   * 是否可以开始新任务
   */
  canStart(): boolean {
    return !this.paused && this.running < this.concurrency && !this.isEmpty();
  }

  /**
   * 增加运行计数
   */
  incrementRunning(): void {
    this.running++;
  }

  /**
   * 减少运行计数
   */
  decrementRunning(): void {
    this.running--;
  }

  /**
   * 暂停队列
   */
  pause(): void {
    this.paused = true;
  }

  /**
   * 恢复队列
   */
  resume(): void {
    this.paused = false;
  }

  /**
   * 是否暂停
   */
  isPaused(): boolean {
    return this.paused;
  }

  /**
   * 清空队列
   */
  clear(): void {
    this.queue = [];
  }

  /**
   * 移除指定任务
   */
  remove(id: string): boolean {
    const index = this.queue.findIndex(task => task.id === id);
    if (index !== -1) {
      this.queue.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * 设置并发数
   */
  setConcurrency(concurrency: number): void {
    this.concurrency = Math.max(1, concurrency);
  }

  /**
   * 获取并发数
   */
  getConcurrency(): number {
    return this.concurrency;
  }
}

