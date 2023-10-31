const { test } = require('@playwright/test')
const { isCI } = require('ci-info')
test.setTimeout(30000)
test.slow(isCI)

const runTests = require('./serve.helper.js').runTests

test('electron:serve-ts', async () => {
  await runTests(true)
})
