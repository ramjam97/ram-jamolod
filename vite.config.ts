import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'


// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Detect if deploying to GitHub Pages (via environment variable)
console.log('DEPLOY_TARGET:', process.env.DEPLOY_TARGET);

// https://vite.dev/config/
export default defineConfig({
  base: '/ram-jamolod/',
  plugins: [
    react(), tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  }
})
