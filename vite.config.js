import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // important for sandbox
    port: 2222       // match with CodeSandbox port
  }
})
