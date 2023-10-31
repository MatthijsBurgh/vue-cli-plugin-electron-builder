const { test } = require('@playwright/test')
const { isCI } = require('ci-info')
test.setTimeout(30000)
test.slow(isCI)

const runTests = require('./build.helper.js').runTests

test('electron:build-ts', async () => {
  await runTests(true)
})
