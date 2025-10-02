# 🚀 快速开始

## 安装步骤

### 1. 安装依赖

```bash
npm install
```

或使用其他包管理器：

```bash
pnpm install
# 或
yarn install
```

### 2. 启动开发服务器

```bash
npm run dev
```

服务器将在 http://localhost:4321 启动

### 3. 构建生产版本

```bash
npm run build
```

构建产物将在 `dist/` 目录

### 4. 预览生产版本

```bash
npm run preview
```

## 常见问题

### Q: 安装依赖失败怎么办？

A: 尝试以下方法：
- 清理缓存：`npm cache clean --force`
- 删除 `node_modules` 和 `package-lock.json`，重新安装
- 使用 Node.js 18+ 版本

### Q: 开发服务器启动失败？

A: 检查：
- 端口 4321 是否被占用
- Node.js 版本是否符合要求（18+）
- 依赖是否正确安装

### Q: 图片压缩不工作？

A: 确保：
- 浏览器支持 Web Worker
- 浏览器支持 Canvas API
- 图片格式正确（JPG、PNG、WebP、AVIF、GIF）

## 部署

### 静态托管（推荐）

项目构建后是纯静态文件，可以部署到：

- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: 拖拽 `dist/` 文件夹到 Netlify
- **GitHub Pages**: 推送 `dist/` 到 gh-pages 分支
- **Cloudflare Pages**: 连接 Git 仓库自动部署

### 配置示例

#### Vercel
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

#### Netlify
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

## 开发建议

1. **代码规范**: 遵循 TypeScript 类型检查
2. **组件开发**: React 组件使用 `client:load` 指令
3. **样式**: 使用 Tailwind CSS 工具类
4. **状态管理**: 通过 Zustand store 管理全局状态

## 需要帮助？

- 📧 Email: wanghongxiang23@gmail.com
- 𝕏 Twitter: @Rollkey4

