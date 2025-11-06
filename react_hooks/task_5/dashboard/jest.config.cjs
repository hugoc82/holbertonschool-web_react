module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],  // Assure-toi que ce fichier existe
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',  // Assurez-vous d'utiliser babel-jest pour transpiler JSX
  },
  moduleNameMapper: {
    '\\.(css|scss|sass|less)$': '<rootDir>/styleMock.js',
    '\\.(png|jpe?g|gif|svg)$': '<rootDir>/fileMock.js',
    '^axios$': 'jest-mock-axios',  // La configuration pour jest-mock-axios
  },
};
