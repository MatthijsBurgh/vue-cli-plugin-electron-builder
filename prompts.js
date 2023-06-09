const path = require('path')

module.exports = [
  {
    name: 'electronBuilder.electronVersion',
    type: 'list',
    message: 'Choose Electron Version',
    default: '^23.0.0',
    choices: [
      {
        name: '^17.0.0',
        value: '^17.0.0',
        short: '^17.0.0'
      },
      {
        name: '^18.0.0',
        value: '^18.0.0',
        short: '^18.0.0'
      },
      {
        name: '^19.0.0',
        value: '^19.0.0',
        short: '^19.0.0'
      },
      {
        name: '^20.0.0',
        value: '^20.0.0',
        short: '^20.0.0'
      },
      {
        name: '^21.0.0',
        value: '^21.0.0',
        short: '^21.0.0'
      },
      {
        name: '^22.0.0',
        value: '^22.0.0',
        short: '^22.0.0'
      },
      {
        name: '^23.0.0',
        value: '^23.0.0',
        short: '^23.0.0'
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
