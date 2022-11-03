/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 8080 },

  plugins: [vue(), tsconfigPaths({ loose: true })],

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
