import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  root: './', // or wherever your index.html is
  build: {
    outDir: 'dist',
  },
})
