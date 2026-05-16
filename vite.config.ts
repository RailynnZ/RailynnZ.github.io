import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 构建到 docs/，配合 GitHub Pages「从分支的 /docs 文件夹发布」
  // 发布后的站点仍在域名根路径，base 保持默认 '/' 即可
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
