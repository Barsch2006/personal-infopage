import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      isProduction: true,
    }),
  ],
  appType: 'spa',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: './dist',
    assetsDir: './src/assets',
    chunkSizeWarningLimit: 2000,
    emptyOutDir: true,
    sourcemap: true,
    manifest: false,
    minify: false,
    write: true,
    copyPublicDir: true,
  }
});
