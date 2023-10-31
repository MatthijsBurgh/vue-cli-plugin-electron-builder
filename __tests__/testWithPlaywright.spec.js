const { isCI } = require('ci-info')
jest.setTimeout(isCI ? 30000 : 15000)

const createPlaywrightProject = require('./testWithPlaywright.helper.js')

test('testWithPlayWright project created', async () => {
  await createPlaywrightProject()
})
