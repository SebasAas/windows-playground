module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts, tsx}', '!src/styles/**'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};
