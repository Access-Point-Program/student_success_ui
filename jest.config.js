module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: { '^.+\\.(js|jsx)$': 'babel-jest' },
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    // stub CSS modules & plain CSS
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',

    // stub images/fonts/SVGs (as a file path string)
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
};