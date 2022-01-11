module.exports = {
  extends: [
    '@antfu/vue'
  ],
  rules: {
    'curly': ['error', 'multi-line'],
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],

    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }]
  }
}
