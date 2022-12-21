/*!
 * https://eslint.bootcss.com/docs/rules/
 *
 * - 0: off
 * - 1: warn
 * - 2: error
 */

/** @type { import('eslint').Linter.BaseConfig } */
module.exports = {
  'extends': ['@antfu'],
  rules: {
    curly: ['error', 'multi-line'],
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'quote-props': ['error', 'as-needed', { keywords: true }],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'antfu/if-newline': 'off',
    'template-curly-spacing': ['error', 'always'],
  },
}
