/*
 * @Author: 程英明
 * @Date: 2021-11-25 09:52:58
 * @LastEditTime: 2022-02-21 09:03:30
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\vite.config.js
 * QQ:504875043@qq.com
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import Pages from "vite-plugin-pages";

const timestamp = new Date().getTime();
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV == 'development' ? './' : '/',
  plugins: [vue(), Pages({
    dirs: "src/views"
  })],
  server: {
    port: 3000,
    open: true,
    host: '0.0.0.0'
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].${timestamp}.js`,
        chunkFileNames: `assets/[name].${timestamp}.js`,
        assetFileNames: `assets/[name].${timestamp}.[ext]`,
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
})
