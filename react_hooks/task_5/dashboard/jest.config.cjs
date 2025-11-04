/** Jest config pour task_5/dashboard (CommonJS) */
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|scss|sass|less)$': '<rootDir>/styleMock.js',
    '\\.(png|jpe?g|gif|svg)$': '<rootDir>/fileMock.js'
  }
};
