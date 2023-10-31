const { isCI } = require('ci-info')
jest.setTimeout(isCI ? 60000 : 30000)

const runTests = require('./build.helper.js').runTests

test('electron:build', async () => {
  await runTests()
})
