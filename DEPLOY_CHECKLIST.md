# 🚀 部署检查清单

## ✅ 部署前准备

### 1. **更新实际域名**
将以下文件中的 `https://picpress.app/` 替换为你的实际域名：

- [ ] `src/pages/index.astro` (所有 meta 标签中的 URL)
- [ ] `src/pages/about.astro` (所有 meta 标签中的 URL)
- [ ] `public/sitemap.xml`
- [ ] `public/robots.txt`

### 2. **图标文件（可选，建议）**

当前使用 SVG 作为临时图标，运行正常。如需 PNG 图标：

**生成 PNG 图标：**
- [ ] 访问 [CloudConvert](https://cloudconvert.com/svg-to-png)
- [ ] 上传 `public/icon.svg`
- [ ] 生成 192x192px → 保存为 `public/icon-192.png`
- [ ] 生成 512x512px → 保存为 `public/icon-512.png`
- [ ] 更新 `public/manifest.json` 使用 PNG 图标

**创建 OG Image：**
- [ ] 创建 1200x630px 图片
- [ ] 保存为 `public/og-image.png`
- [ ] 包含 Logo + 标语

**创建截图：**
- [ ] 打开网站截图主界面
- [ ] 1280x720px
- [ ] 保存为 `public/screenshot.png`

### 3. **环境变量（如需要）**

如果使用分析工具，在 Vercel 中添加：
- [ ] `NEXT_PUBLIC_ANALYTICS_ID` (如使用 Google Analytics)
- [ ] 其他 API Keys

## 🔍 部署后验证

### 基础功能测试
- [ ] 网站可以正常访问
- [ ] 首页加载正常
- [ ] 关于页加载正常
- [ ] 导航工作正常

### 核心功能测试
- [ ] 拖拽上传图片
- [ ] 点击选择图片
- [ ] 图片列表显示
- [ ] 参数调节（格式、质量、尺寸）
- [ ] 开始压缩功能
- [ ] 预览功能
- [ ] 单个下载
- [ ] 批量导出 ZIP
- [ ] 清除功能

### 多语言测试
- [ ] 语言切换器显示
- [ ] 切换到中文
- [ ] 切换到日文
- [ ] 切换到韩文
- [ ] 切换到阿拉伯语
- [ ] 切换回英文
- [ ] 刷新页面保持语言设置

### SEO 验证
- [ ] 浏览器标签显示正确的标题和图标
- [ ] 检查 `https://yourdomain.com/sitemap.xml` 可访问
- [ ] 检查 `https://yourdomain.com/robots.txt` 可访问
- [ ] 检查 `https://yourdomain.com/manifest.json` 可访问

### 社交媒体预览
- [ ] [OpenGraph Checker](https://www.opengraph.xyz/) - 输入你的 URL
- [ ] [Twitter Card Validator](https://cards-dev.twitter.com/validator) - 输入你的 URL
- [ ] 检查预览图和文字正确

### 性能测试
- [ ] [Google PageSpeed Insights](https://pagespeed.web.dev/) - 输入你的 URL
  - 目标：桌面 > 90, 移动 > 80
- [ ] [WebPageTest](https://www.webpagetest.org/)
- [ ] Chrome DevTools Lighthouse

### PWA 测试
- [ ] Chrome DevTools → Application → Manifest (检查无错误)
- [ ] Chrome DevTools → Application → Service Worker
- [ ] 尝试"添加到主屏幕"（移动设备）

## 📢 部署后推广

### 搜索引擎提交
- [ ] [Google Search Console](https://search.google.com/search-console)
  - 验证域名
  - 提交 sitemap
- [ ] [Bing Webmaster Tools](https://www.bing.com/webmasters)
  - 验证域名
  - 提交 sitemap

### 产品发布平台
- [ ] [Product Hunt](https://www.producthunt.com/posts/new)
- [ ] [Hacker News](https://news.ycombinator.com/submit) - Show HN
- [ ] [Reddit](https://www.reddit.com/r/SideProject/)
- [ ] [IndieHackers](https://www.indiehackers.com/products/new)

### 社交媒体
- [ ] X/Twitter 发布推文 (@Rollkey4)
- [ ] LinkedIn 分享
- [ ] Facebook 分享（如适用）

### 技术社区
- [ ] [Dev.to](https://dev.to/) - 写技术博客
- [ ] [Hashnode](https://hashnode.com/)
- [ ] [Medium](https://medium.com/)

## 🐛 常见问题

### 1. 图标不显示
**问题**: PWA 图标或 favicon 不显示
**解决**: 
- 清除浏览器缓存（Ctrl+Shift+Delete）
- 硬刷新（Ctrl+F5）
- 检查文件路径是否正确

### 2. 语言不切换
**问题**: 切换语言后界面没变化
**解决**: 
- 检查浏览器控制台是否有错误
- 确认 localStorage 权限正常
- 尝试无痕模式测试

### 3. 压缩功能不工作
**问题**: 点击压缩后无反应
**解决**: 
- 打开浏览器控制台查看错误
- 确认 Web Worker 加载正常
- 检查图片格式是否支持

### 4. ZIP 导出失败
**问题**: 导出 ZIP 时报错
**解决**: 
- 检查是否有已完成的图片
- 确认浏览器支持 Blob API
- 检查控制台错误信息

### 5. Vercel 部署失败
**问题**: 构建时出错
**解决**: 
- 检查 TypeScript 类型错误
- 确认所有依赖已安装
- 查看 Vercel 构建日志

## 📊 监控设置

### 推荐工具（免费）

**Plausible Analytics**（隐私友好）
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

**Vercel Analytics**（内置）
```bash
# 在 Vercel Dashboard 中启用
Settings → Analytics → Enable
```

### 监控指标
- 每日访问量 (DAU)
- 页面浏览量 (PV)
- 平均会话时长
- 跳出率
- 转化率（压缩任务完成数）

## 🔐 安全检查

- [ ] HTTPS 已启用（Vercel 自动）
- [ ] 无敏感信息泄露
- [ ] CSP (Content Security Policy) 配置（可选）
- [ ] 依赖安全扫描（`npm audit`）

## 📝 文档更新

- [ ] README.md 更新实际 URL
- [ ] LICENSE 文件存在
- [ ] CONTRIBUTING.md（如需要）
- [ ] CHANGELOG.md（如需要）

## 🎉 部署完成

恭喜！你的 PicPress 已成功部署！

**下一步：**
1. 分享到社交媒体
2. 收集用户反馈
3. 持续改进产品
4. 添加新功能

---

**需要帮助？**
- Email: wanghongxiang23@gmail.com
- X: @Rollkey4
- GitHub Issues: https://github.com/23whx/PicPress/issues

