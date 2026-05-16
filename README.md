# RailynnZ.github.io

RailynnZ 的 GitHub Pages 站点，使用 Vite、React 与 TypeScript 搭建。

远程仓库：`git@github.com:RailynnZ/RailynnZ.github.io.git`

## 本地开发

```bash
npm install
npm run dev
```

## 构建与部署到 `docs/`

```bash
npm run build
```

构建产物输出到仓库根目录下的 **`docs/`**（已纳入 Git）。推送 `main` 后，在 GitHub 上把 Pages 发布源指向该文件夹即可。

- 官方说明：[Configuring a publishing source for your GitHub Pages site](https://docs.github.com/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- 个站仓库名需为 `<用户名>.github.io`；在 **Settings → Pages** 中选择 **Deploy from a branch**，分支 **main**，文件夹 **`/docs`**。
- 选择 **`/docs` 作为发布目录时，站点根 URL 仍是 `https://<用户名>.github.io/`，并不是 `.../docs/`**；GitHub 会把 `docs` 里的文件当作网站根目录来提供。

`public/.nojekyll` 会随构建进入 `docs/`，用于关闭 Jekyll，避免静态资源被错误处理。`404.html` 由构建脚本从 `index.html` 复制，便于子路径刷新时仍由前端路由接管。
