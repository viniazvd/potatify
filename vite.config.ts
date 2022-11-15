/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'
import viteCompression from 'vite-plugin-compression'
// import windiCss from 'vite-plugin-windicss'

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
      external: ['vue'],
      output: {
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
    // windiCss(),
    vue(),
    checker({ vueTsc: true }),
    viteCompression({
      algorithm: 'gzip',
      // deleteOriginFile: true
    })
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
