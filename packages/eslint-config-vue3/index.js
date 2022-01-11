module.exports = {
  extends: [
    '@antfu/vue'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'curly': ['error', 'multi-line'],
    'brace-style': ['error', '1tbs', {
      'allowSingleLine': true
    }],
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
    }]
  }
}
