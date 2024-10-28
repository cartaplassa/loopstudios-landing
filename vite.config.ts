import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// Fix Dart Sass legacy JS API Deprecation spam
const cssModernAPI = {
  preprocessorOptions: {
    scss: {
      api: 'modern'
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "/loopstudios-landing",
  plugins: [tsconfigPaths(), react()],
  css: cssModernAPI
})
