import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ArtShare/',   // nom EXACT du repo GitHub
  plugins: [react()],
})
