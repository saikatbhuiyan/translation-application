import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    // Escaped backslashes: in a plain string '\.' collapses to '.', which made
    // this match any char before 'js' (e.g. '.cjs') and break CJS deps.
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^uuid$': '<rootDir>/tests/__mocks__/uuid.ts',
  },
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        diagnostics: {
          ignoreCodes: [151002],
        },
      },
    ],
  },
  testMatch: ['**/tests/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js'],
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  injectGlobals: true,
};

export default config;
