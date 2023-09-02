/* !
 * https://eslint.bootcss.com/docs/rules/
 *
 * - 0: off
 * - 1: warn
 * - 2: error
 */

/** @type { import('eslint').Linter.BaseConfig } */
module.exports = {
  extends: '@antfu',
  rules: {
    'curly': ['error', 'multi-line'],
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'antfu/if-newline': 'off',
    'antfu/top-level-function': 'off',
    // Vue
    'vue/component-tags-order': 'off',
    'vue/no-deprecated-functional-template': 'off',
    'vue/one-component-per-file': 'off',
    'vue/no-template-shadow': 'off',
    'vue/require-prop-types': 'off',
    'vue/singleline-html-element-content-newline': 'off',

    'quote-props': ['error', 'consistent-as-needed'],
    'spaced-comment': ['error', 'always', { exceptions: ['#__PURE__'] }],
    'node/no-callback-literal': 'off',
    'import/namespace': 'off',
  },
}
