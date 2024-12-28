import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        additionalData: `@use "styles/variables" as *;`,
        quietDeps: true,
      },
    },
  },
  resolve: {
    alias: {
      styles: path.resolve(__dirname, './src/styles'),
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      api: path.resolve(__dirname, './src/api'),
      'react-query': path.resolve(__dirname, './src/react-query'),
      utils: path.resolve(__dirname, './src/utils'),
      types: path.resolve(__dirname, './src/types'),
      context: path.resolve(__dirname, './src/context'),
      mock: path.resolve(__dirname, './src/mock'),
    },
  },
})
