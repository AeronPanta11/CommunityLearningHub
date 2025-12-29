import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,        // 👈 REQUIRED
    port: 5173,        // optional but recommended
    strictPort: true, // avoids random port change
  },
})
