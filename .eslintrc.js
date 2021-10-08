module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: true
        },
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es2020: true,
        'jest/globals': true
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: [
        'standard',
        'eslint:recommended',
        'plugin:compat/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:mdx/recommended',
        'plugin:optimize-regex/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended'
    ],
    plugins: [
        '@typescript-eslint',
        'jest',
        'promise'
    ],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'linebreak-style': 0,
        quotes: ['error', 'single'],
        'no-console': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
        ],
        '@typescript-eslint/explicit-function-return-type': 'warn', // Consider using explicit annotations for object literals and function return types even when they can be inferred.
        'no-empty': 'warn',
        'no-return-assign': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/prop-types': 0,
        semi: [2, 'always'],
        'space-before-function-paren': ['warn', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
        }]
    }
};
