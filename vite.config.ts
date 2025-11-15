/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./.vitest/vitest.setup.ts'],
    include: ['./app/**/*.test.{ts,tsx}'],
    exclude: [
      '.git',
      '.husky',
      '.scripts',
      '.vscode',
      '.next',
      'node_modules',
      'public',
      'build',
      'storybook-static',
      'coverage'
    ]
  }
})
