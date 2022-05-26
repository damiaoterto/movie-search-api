module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  coverageProvider: "babel",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  setupFilesAfterEnv: ['<rootDir>/test/setup-jest.js'],
  transform: {
    "^.+\\.js?$": "babel-jest"
  },
};
