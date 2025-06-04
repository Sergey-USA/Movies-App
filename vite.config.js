import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import { fileURLToPath } from 'url';

// https://vite.dev/config/
const dirName = path.dirname(fileURLToPath(import.meta.url));


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
       '@components': path.resolve(dirName, './src/components'),
       '@ui': path.resolve(dirName, './src/components/ui'),
       '@api': path.resolve(dirName, './src/api'),
       '@pages': path.resolve(dirName, './src/pages'),
       '@features': path.resolve(dirName, './src/features'),
       '@src': path.resolve(dirName, './src'),

    }
  },
  server: {
    port: 3001
  }
})
