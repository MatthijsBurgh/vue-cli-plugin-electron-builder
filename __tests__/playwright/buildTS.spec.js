const { test } = require('@playwright/test')
const isWin = process.platform === 'win32'
test.setTimeout(30000)
test.slow(isWin)

const runTests = require('./build.helper.js').runTests

test('electron:build-ts', async () => {
  await runTests(true)
})
