import { test } from '@playwright/test'
const { isCI } = require('ci-info')
test.setTimeout(20000)
test.slow(isCI)

const runTestWithPlaywright = require('./testWithPlaywright.helper.js')

test('testWithPlayWright works', async () => {
  await runTestWithPlaywright()
})
