/** Jest limité à la task_4 + transpile JSX via babel-jest */
module.exports = {
  roots: ['<rootDir>/react_hooks/task_4'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  modulePathIgnorePatterns: [
    '<rootDir>/react_component/',
    '<rootDir>/react_props/',
    '<rootDir>/react_intro/',
    '<rootDir>/react_state/',
    '<rootDir>/react_styling/',
    '<rootDir>/Webpack/'
  ],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  moduleNameMapper: {
+   '^axios$': 'jest-mock-axios',
    '\\.(css|scss|sass|less)$': '<rootDir>/styleMock.js',
    '\\.(png|jpe?g|gif|svg)$': '<rootDir>/fileMock.js'
  }
};
