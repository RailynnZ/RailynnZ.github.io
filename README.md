# RailynnZ.github.io

RailynnZ 的 GitHub Pages 站点，使用 Vite、React 与 TypeScript 搭建。

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## GitHub Pages（个站）

仓库根目录里的是 **源码**，GitHub Pages 只会托管静态文件；直接发布 `main` 根目录时，浏览器无法运行 `src/main.tsx`，页面会空白。

本仓库通过 **GitHub Actions** 在每次推送到 `main` 时执行 `npm run build`，把 `dist/` 部署到 Pages。

1. 打开仓库 **Settings → Pages**。
2. **Build and deployment** 里将 **Source** 设为 **GitHub Actions**（不要再用 “Deploy from a branch” 指向 `main` 根目录）。
3. 推送触发工作流后，在 **Actions** 里确认 “Deploy to GitHub Pages” 成功；几分钟后访问 `https://railynnz.github.io/`。

构建脚本会把 `index.html` 复制为 `404.html`，便于在子路径（如 `/about`）直接刷新时仍由前端路由接管。
