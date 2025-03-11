import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from "rollup-plugin-visualizer";
// https://vite.dev/config/
export default defineConfig({
   server: {
    proxy: {
      '/api': {
        target: 'https://ecommerce.zerobytetools.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

  plugins: [
    react(),
    tailwindcss(),
    visualizer({ open: true }),
  ],
})
