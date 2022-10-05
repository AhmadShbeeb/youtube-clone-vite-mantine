import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   // origin: 'http://127.0.0.1:5173',
  //   // cors: true,
  //   proxy: {
  //     '/api': {
  //       origin: 'https://suggestqueries.google.com',
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
})
