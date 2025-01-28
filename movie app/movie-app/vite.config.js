import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import tailwind
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  ///adding tailwindcss() to the array
  plugins: [react(), tailwindcss()],
})
