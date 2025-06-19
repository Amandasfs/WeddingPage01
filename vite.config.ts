import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/WeddingPage01/',   // Essencial para GitHub Pages
})
