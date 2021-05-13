const { defaults } = require('jest-config')

module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  // transform: {"\\.ts$": ['ts-jest']},
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/example/'
  ],
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'js',
    'jsx',
    'ts',
    'tsx',
    'nano'
  ]
}
