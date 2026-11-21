import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Served from https://islam-diab.github.io/portfolio/
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})
