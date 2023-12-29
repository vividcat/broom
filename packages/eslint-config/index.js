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

    'spaced-comment': 'off',
    '@stylistic/js/spaced-comment': ['error', 'always', { markers: ['/'], exceptions: ['#__PURE__', '@__PURE__'] }],

    // Antfu
    'antfu/if-newline': 'off',
    'antfu/top-level-function': 'off',
    'antfu/no-const-enum': 'off',
    // Vue
    'vue/component-tags-order': 'off',
    'vue/no-deprecated-functional-template': 'off',
    'vue/one-component-per-file': 'off',
    'vue/no-template-shadow': 'off',
    'vue/require-prop-types': 'off',
    'vue/singleline-html-element-content-newline': 'off',

    'quote-props': ['error', 'consistent-as-needed'],
    'node/no-callback-literal': 'off',
    'import/namespace': 'off',
  },
}
