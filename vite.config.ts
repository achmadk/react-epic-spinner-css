import { resolve } from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts';
import tsconfig from 'vite-tsconfig-paths';
import { externalizeDeps } from 'vite-plugin-externalize-deps';
import linaria from '@linaria/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    ...(command === 'build' && mode === 'production' ? { define: { 'process.env.NODE_ENV': '"production"' }} : {}),
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.tsx'),
        name: 'reactEpicSpinner',
        fileName: 'index',
      },
    },
    plugins: [
      react(),
      linaria(),
      dts(),
      tsconfig(),
      externalizeDeps()
    ],
  }
})
