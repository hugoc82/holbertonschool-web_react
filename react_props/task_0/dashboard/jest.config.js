export default {
  testEnvironment: "jsdom",
  transform: { "^.+\\.[jt]sx?$": "babel-jest" },
  moduleNameMapper: { "\\.(css)$": "identity-obj-proxy" },
  setupFilesAfterEnv: ["@testing-library/jest-dom"]
};
