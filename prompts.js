const path = require('path')

module.exports = [
  {
    name: 'electronBuilder.electronVersion',
    type: 'list',
    message: 'Choose Electron Version',
    default: '^27.0.0',
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
      },
      {
        name: '^24.0.0',
        value: '^24.0.0',
        short: '^24.0.0'
      },
      {
        name: '^25.0.0',
        value: '^25.0.0',
        short: '^25.0.0'
      },
      {
        name: '^26.0.0',
        value: '^26.0.0',
        short: '^26.0.0'
      },
      {
        name: '^27.0.0',
        value: '^27.0.0',
        short: '^27.0.0'
      },
      {
        name: '^28.0.0',
        value: '^28.0.0',
        short: '^28.0.0'
      },
      {
        name: '^29.0.0',
        value: '^29.0.0',
        short: '^29.0.0'
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
