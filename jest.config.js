
module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testEnvironment: 'node',
  testRegex: './test/.*\\.(test|spec)?\\.(ts|ts)$',
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'json', 'node' ],
  roots: [ '<rootDir>/test' ],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  }
};
