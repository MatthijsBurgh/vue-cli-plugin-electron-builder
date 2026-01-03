const { GITHUB_ACTIONS } = require('ci-info')

/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/__tests__/setup.helper.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/playwright/',
    '/__tests__/projects/',
    '/generator/templates',
    '.*.helper.js'
  ],
  collectCoverageFrom: [
    'index.{js,ts}',
    'generator/index.{js,ts}',
    'lib/testWithPlaywright.helper.{js,ts}',
    'lib/webpackConfig.{js,ts}'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  reporters: GITHUB_ACTIONS ? [['github-actions', { silent: false }], 'summary'] : ['default']
}
