module.exports = {
  displayName: 'nx-semantic-release',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/nx-semantic-release',
  setupFilesAfterEnv: ['./src/tests/setup.ts'],
  testTimeout: 100000,
};
