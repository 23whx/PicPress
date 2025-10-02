# 📸 PicPress - 批量图片压缩器

> 一个完全在本地运行的现代化批量图片压缩工具

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Astro](https://img.shields.io/badge/Astro-4.x-orange.svg)
![React](https://img.shields.io/badge/React-18.x-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)

## ✨ 特性

- 🚀 **高性能** - 使用 Web Worker 后台处理，不阻塞 UI
- 🎨 **简约美观** - 淡绿色背景 + 淡红色强调的现代化设计
- 🔒 **隐私优先** - 所有处理均在浏览器本地完成，不上传任何数据
- 📦 **批量处理** - 支持拖拽、点击选择、粘贴剪贴板批量导入
- 🖼️ **多格式支持** - JPG、PNG、WebP、AVIF、GIF
- ⚙️ **灵活参数** - 自定义质量、尺寸、格式
- 👀 **实时预览** - 原图与压缩后对比
- 💾 **批量导出** - 一键打包下载 ZIP
- 🌐 **多语言支持** - 支持中文、英语、日语、韩语、阿拉伯语 5 种语言，自动检测浏览器语言

## 🛠️ 技术栈

- **[Astro](https://astro.build)** - 现代化静态站点框架
- **[React](https://react.dev)** - 交互组件
- **[Tailwind CSS](https://tailwindcss.com)** - 样式
- **[TypeScript](https://www.typescriptlang.org)** - 类型安全
- **[Zustand](https://zustand-demo.pmnd.rs)** - 状态管理
- **[JSZip](https://stuk.github.io/jszip/)** - ZIP 打包
- **Web Worker** - 后台图片处理

## 📦 安装

```bash
# 安装依赖
npm install
# 或
pnpm install
# 或
yarn install
```

## 🚀 开发

```bash
# 启动开发服务器
npm run dev
```

访问 http://localhost:4321

## 🏗️ 构建

```bash
# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 📁 项目结构

```
PicPress/
├── src/
│   ├── components/          # React 组件
│   │   ├── ui/             # 基础 UI 组件
│   │   │   ├── Button.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   └── Toast.tsx
│   │   ├── DropZone.tsx    # 拖拽上传区
│   │   ├── FileList.tsx    # 文件列表
│   │   ├── ControlsPanel.tsx # 参数控制面板
│   │   ├── PreviewPane.tsx # 预览面板
│   │   └── Toolbar.tsx     # 工具栏
│   ├── lib/                # 工具库
│   │   ├── image.ts        # 图片处理工具
│   │   ├── queue.ts        # 任务队列
│   │   └── zip.ts          # ZIP 打包
│   ├── pages/              # 页面
│   │   ├── index.astro     # 首页
│   │   ├── about.astro     # 关于页
│   │   └── settings.astro  # 设置页
│   ├── store/              # 状态管理
│   │   └── useAppStore.ts
│   ├── styles/             # 样式
│   │   └── global.css
│   └── workers/            # Web Workers
│       └── compressor.worker.ts
├── public/                 # 静态资源
├── astro.config.mjs        # Astro 配置
├── tailwind.config.ts      # Tailwind 配置
├── tsconfig.json           # TypeScript 配置
└── package.json
```

## 🎨 设计理念

### 配色方案

- **全局背景**: 淡绿色 (`#E8F5E9`)
- **主色**: 白色 (`#FFFFFF`)
- **强调色**: 淡红色 (`#F8BBD0`)

### 设计原则

- 极简风格，留白充分
- 圆角 (`rounded-2xl`) 和柔和阴影
- 响应式设计，移动端友好
- 符合 WCAG AA 无障碍标准

## 🔧 核心功能

### 图片压缩

- 支持格式：JPG/JPEG、PNG、WebP、AVIF、GIF
- 可调参数：质量 (1-100)、最长边限制、格式转换
- 并发处理：可配置同时处理的图片数量

### 批量操作

- 拖拽上传
- 点击选择
- 粘贴剪贴板（Ctrl+V）
- 批量导出为 ZIP
- 单张下载

### 预览与对比

- 原图 vs 压缩后切换
- 体积对比
- 尺寸信息
- 压缩率统计
- 处理时间

### 多语言支持

- 🇬🇧 English（默认）
- 🇨🇳 简体中文
- 🇯🇵 日本語
- 🇰🇷 한국어
- 🇸🇦 العربية（支持 RTL）
- 自动检测浏览器语言
- localStorage 持久化保存

## 🌐 浏览器兼容性

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+

某些功能（如 AVIF）可能需要更新的浏览器版本。

## 📄 许可证

MIT License

## 👨‍💻 作者

- **Email**: wanghongxiang23@gmail.com
- **X (Twitter)**: [@Rollkey4](https://x.com/Rollkey4)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## ⚠️ 免责声明

请确保您拥有上传和处理图片的合法权利。请勿上传受版权保护或违反法律的内容。

---

**享受使用 PicPress！** 🎉

