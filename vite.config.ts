/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'
// import tsconfigPaths from 'vite-tsconfig-paths'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 8080 },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'potatify',
      fileName: (format) => `potatify.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build, for externalized deps
        dir: "dist",
        globals: { vue: 'Vue' }
      }
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    }
  },

  plugins: [
    vue(),
    checker({ vueTsc: true })
  ],

  test: {
    environment: "jsdom",
    globals: true,
    reporters: ["dot", "json"],
    outputFile: ".vitest-result.json",
    root: ".",
    coverage: {
      all: true,
      reporter: ["lcov", "html", "text"],
      extension: [".vue", ".ts"],
      branches: 85,
      lines: 85,
      statements: 85,
      functions: 85
    }
  }
})
