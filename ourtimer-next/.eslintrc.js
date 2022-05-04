module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'ignorePatterns': [ 'dist', 'node_modules', 'coverage' ],
  'rules': {
    'comma-dangle': [ 'error', 'always-multiline' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'indent': 0,
    '@typescript-eslint/indent': [ 'error', 2 ],
    'linebreak-style': [ 'error', 'unix' ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'never' ],
    '@typescript-eslint/consistent-type-definitions': [ 'error', 'interface' ],
    'space-before-function-paren': ["error", "always"],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'interface',
        'format': [ 'PascalCase' ],
        'custom': {
          'regex': '^I[A-Z]',
          'match': false,
        },
      },
    ],
  },
}
