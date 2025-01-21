module.exports = {
    testEnvironment: 'node',
    testTimeout: 30000,
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
};

