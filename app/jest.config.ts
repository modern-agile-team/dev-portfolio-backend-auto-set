module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  // preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
  // transform: {
  //   '^.+\\.(js|jsx)?$': 'babel-jest',
  // },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testMatch: [
    '<rootDir>/**/*.test.(js|jsx|tsx)',
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
