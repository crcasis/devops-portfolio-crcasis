import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest/presets/js-with-ts', // Optimized for TSX
  testEnvironment: 'jsdom', // Required for React Testing Library
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)', // Matches tests in __tests__ folders
    '**/?(*.)+(spec|test).[jt]s?(x)', // Matches *.test.tsx or *.spec.tsx
  ],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.jest.json',
        useESM: false, // Use CommonJS for Next.js compatibility
        diagnostics: true, // Enable detailed error messages
      },
    ],
  },
  transformIgnorePatterns: ['/node_modules/(?!(@radix-ui)/)'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^next/image$': '<rootDir>/__mocks__/next/image.js',
    '^next/router$': '<rootDir>/__mocks__/next/router.js',
    '^next$': '<rootDir>/__mocks__/next/index.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/dist/', '/coverage/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coverageReporters: ['text', 'lcov'], // Compatible with SonarQube
  verbose: true,
}

export default config
