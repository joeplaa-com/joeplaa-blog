module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: true
        },
        sourceType: 'module',
    },
    env: {
        browser: true,
        node: true,
        es2020: true,
        "jest/globals": true
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:compat/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:mdx/recommended',
        'plugin:optimize-regex/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: [
        '@typescript-eslint',
        'jest',
        'promise',
    ],
    rules: {
        indent: ["error", 4],
        '@typescript-eslint/explicit-function-return-type': "off",
        '@typescript-eslint/explicit-module-boundary-types': "off",
        'react/react-in-jsx-scope': "off"
    }
};