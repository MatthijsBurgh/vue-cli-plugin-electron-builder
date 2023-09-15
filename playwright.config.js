import { defineConfig } from '@playwright/test'

export default defineConfig({
  maxFailures: 2,
  reporter: process.env.CI ? 'github' : 'list',
  testDir: './__tests__/playwright/',
  testMatch: ['**/*.spec.js']
})
