// Manual mock for fs module
module.exports = {
  readFileSync: jest.fn(),
  writeFileSync: jest.fn(),
  existsSync: jest.fn(),
  unlinkSync: jest.fn(),
  statSync: jest.fn(),
  readdirSync: jest.fn(),
  mkdirSync: jest.fn(),
  readFile: jest.fn(),
  writeFile: jest.fn()
}
