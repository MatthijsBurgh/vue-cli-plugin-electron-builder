const execa = jest.fn().mockResolvedValue({
  stdout: '',
  stderr: '',
  exitCode: 0
})

module.exports = execa
