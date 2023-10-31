import { defineConfig } from '@playwright/test'
import { isCI, GITHUB_ACTIONS } from 'ci-info'

export default defineConfig({
  maxFailures: 2,
  reporter: isCI ? (GITHUB_ACTIONS ? 'github' : 'dot') : 'list',
  testDir: './__tests__/playwright/',
  testMatch: ['**/*.spec.js'],
  workers: isCI ? 1 : undefined
})
