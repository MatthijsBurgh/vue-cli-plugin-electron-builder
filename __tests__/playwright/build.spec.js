import { test } from '@playwright/test'
test.setTimeout(100000)

const runTests = require('./build.helper.js').runTests

test('electron:build', async () => {
  await runTests()
})
