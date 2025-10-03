import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // oder '0.0.0.0'
    port: 5173,  // optional, falls du einen anderen Port willst
  },
  server: {
    proxy: {
      '/api' : {
        target: 'http://localhost:3000'
      },
      '/images' : {
        target: 'http://localhost:3000'
      }
    }
  }
  
})
