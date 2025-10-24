import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'


// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Detect if deploying to GitHub Pages (via environment variable)
const isGitHubPages = process.env.DEPLOY_TARGET === 'GH_PAGES'

// https://vite.dev/config/
export default defineConfig({
  base: isGitHubPages ? '/ram-jamolod/' : '/',
  plugins: [
    react(), tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  }
})
