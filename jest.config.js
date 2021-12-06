const {defaults: tsjPreset} = require('ts-jest/presets');

module.exports = {
  rootDir: './',
  preset: 'react-native',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
