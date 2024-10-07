const path = require('path')

module.exports = [
  {
    name: 'electronBuilder.electronVersion',
    type: 'list',
    message: 'Choose Electron Version',
    default: '^32.0.0',
    choices: [
      {
        name: '^29.0.0',
        value: '^29.0.0',
        short: '^29.0.0'
      },
      {
        name: '^30.0.0',
        value: '^30.0.0',
        short: '^30.0.0'
      },
      {
        name: '^31.0.0',
        value: '^31.0.0',
        short: '^31.0.0'
      },
      {
        name: '^32.0.0',
        value: '^32.0.0',
        short: '^32.0.0'
      }
    ],
    when: () => {
      try {
        // Attempt to read package.json
        const pkg = require(path.join(process.cwd(), 'package.json'))
        // Don't show if electron version is already set
        return !pkg.devDependencies.electron
      } catch (e) {
        console.log('Unable to read package.json')
        return true
      }
    }
  },
  {
    name: 'electronBuilder.addTests',
    type: 'confirm',
    message: 'Add tests with Playwright to your project?',
    when: () => {
      try {
        // Attempt to read package.json
        const pkg = require(path.join(process.cwd(), 'package.json'))
        // Don't show if electron version is already set
        return (pkg.devDependencies['@playwright/test'])
      } catch (e) {
        console.log('Unable to read package.json')
        return false
      }
    }
  }
]
