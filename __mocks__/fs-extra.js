// Manual mock for fs-extra module
module.exports = {
  readFileSync: jest.fn(),
  writeFileSync: jest.fn(),
  existsSync: jest.fn(),
  unlinkSync: jest.fn(),
  removeSync: jest.fn(),
  ensureDirSync: jest.fn(),
  copySync: jest.fn(),
  readFile: jest.fn(),
  writeFile: jest.fn(),
  ensureDir: jest.fn(),
  copy: jest.fn(),
  remove: jest.fn(),
  statSync: jest.fn(),
  readdirSync: jest.fn(),
  mkdirSync: jest.fn()
}
