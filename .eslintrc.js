module.exports = {
    "extends": "tui",
    "parserOptions": {
        "ecmaVersion": 3
    },
    "env": {
        "browser": true,
        "jasmine": true,
        "jquery": true,
        "commonjs": true
    },
    "globals": {
        "tui": true,
        "loadFixtures": true,
        "loadStyleFixtures": true
    },
    rules: {
        indent: [2, 4, {SwitchCase: 1, ignoreComments: false, ImportDeclaration: 1, flatTernaryExpressions: false}]
    }
};
