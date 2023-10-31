const { isCI } = require('ci-info')
jest.setTimeout(isCI ? 60000 : 30000)

const runTests = require('./serve.helper.js').runTests
test('electron:serve-ts', async () => {
  await runTests(true)
})
