# 🌐 多语言集成指南

## 已完成的工作

✅ 创建了完整的 i18n 系统 (`src/lib/i18n.ts`)
✅ 支持 5 种语言：英语 (en)、中文 (zh)、日语 (ja)、韩语 (ko)、阿拉伯语 (ar)
✅ 创建了语言状态管理 (`src/store/useLanguageStore.ts`)
✅ 创建了语言切换器组件 (`src/components/LanguageSwitcher.tsx`)
✅ 自动检测浏览器语言
✅ 支持 localStorage 持久化
✅ 阿拉伯语 RTL 支持

## 如何在组件中使用

### 1. 在 React 组件中使用翻译

```tsx
import { useLanguageStore } from '@/store/useLanguageStore';

export default function YourComponent() {
  const t = useLanguageStore((state) => state.t);
  
  return (
    <div>
      <h1>{t.dropzone.title}</h1>
      <p>{t.dropzone.subtitle}</p>
    </div>
  );
}
```

### 2. 在页面顶部添加语言切换器

在 `index.astro`、`about.astro` 和 `settings.astro` 的导航栏中添加：

```astro
---
import LanguageSwitcher from "@/components/LanguageSwitcher";
---

<header>
  <nav class="flex gap-3 items-center">
    <LanguageSwitcher client:load />
    <a href="/settings">设置</a>
    <a href="/about">关于</a>
  </nav>
</header>
```

### 3. 更新现有组件示例

#### DropZone.tsx
```tsx
import { useLanguageStore } from '@/store/useLanguageStore';

export default function DropZone() {
  const t = useLanguageStore((state) => state.t);
  // ... 其他代码
  
  return (
    <div {...getRootProps()}>
      <div className="text-6xl mb-4">📸</div>
      <h3 className="text-xl font-medium mb-2">
        {isDragActive ? t.dropzone.titleActive : t.dropzone.title}
      </h3>
      <p className="text-gray-500 text-sm">{t.dropzone.subtitle}</p>
      <p className="text-gray-400 text-xs mt-2">{t.dropzone.hint}</p>
    </div>
  );
}
```

#### FileList.tsx
```tsx
import { useLanguageStore } from '@/store/useLanguageStore';

export default function FileList() {
  const t = useLanguageStore((state) => state.t);
  // ... 其他代码
  
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
      {/* ... */}
    </div>
  );
}
```

#### ControlsPanel.tsx
```tsx
import { useLanguageStore } from '@/store/useLanguageStore';

export default function ControlsPanel() {
  const t = useLanguageStore((state) => state.t);
  // ... 其他代码
  
  return (
    <div className="card p-6 rounded-2xl shadow-lg space-y-6">
      <h3 className="text-lg font-medium mb-4">{t.controls.title}</h3>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          {t.controls.format}
        </label>
        {/* ... */}
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          {t.controls.quality}
        </label>
        {/* ... */}
      </div>
    </div>
  );
}
```

#### Toolbar.tsx
```tsx
import { useLanguageStore } from '@/store/useLanguageStore';

export default function Toolbar() {
  const t = useLanguageStore((state) => state.t);
  // ... 其他代码
  
  return (
    <div className="card p-6 rounded-2xl shadow-lg">
      <div className="mb-6 grid grid-cols-4 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-gray-800">{tasks.length}</p>
          <p className="text-xs text-gray-500">{t.toolbar.total}</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-yellow-600">{pendingCount}</p>
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
      
      <Button onClick={handleStart}>
        {isProcessing ? t.toolbar.processing : t.toolbar.startCompress}
      </Button>
    </div>
  );
}
```

## 快速开始

### 步骤 1: 在主页添加语言切换器

编辑 `src/pages/index.astro`：

```astro
---
import LanguageSwitcher from "@/components/LanguageSwitcher";
// ... 其他导入
---

<header class="sticky top-0 z-10 backdrop-blur-md bg-brand-bg/80 border-b border-gray-200">
  <div class="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <span class="text-3xl">📸</span>
      <h1 class="text-2xl font-medium">PicPress</h1>
    </div>
    <nav class="flex gap-3 items-center">
      <LanguageSwitcher client:load />
      <a href="/settings">设置</a>
      <a href="/about">关于</a>
    </nav>
  </div>
</header>
```

### 步骤 2: 更新所有组件

使用上面的示例，在每个组件的开头添加：

```tsx
const t = useLanguageStore((state) => state.t);
```

然后将所有硬编码的文本替换为 `t.xxx.xxx`。

### 步骤 3: 测试

1. 刷新页面
2. 点击语言切换器
3. 选择不同语言
4. 验证所有文本是否正确切换

## 注意事项

- ✅ 阿拉伯语会自动切换到 RTL 布局
- ✅ 语言选择会保存到 localStorage
- ✅ 刷新页面后语言设置会保持
- ✅ 默认会根据浏览器语言自动选择

## 翻译键值对应表

| 区域 | 键 | 说明 |
|------|-----|------|
| 导航 | `t.nav.settings` | 设置 |
| 导航 | `t.nav.about` | 关于 |
| 上传区 | `t.dropzone.title` | 拖拽标题 |
| 文件列表 | `t.fileList.title` | 文件列表标题 |
| 控制面板 | `t.controls.format` | 输出格式 |
| 预览 | `t.preview.title` | 预览标题 |
| 工具栏 | `t.toolbar.startCompress` | 开始压缩 |

完整的键值对照请查看 `src/lib/i18n.ts` 文件。

