import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base:path.resolve(__dirname,'./dist/'),
  base:'./',
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  },
  plugins: [vue()]
})
