const basic = require('@vividcat/eslint-config')

/** @type { import('eslint').Linter.BaseConfig } */
module.exports = {
  extends: [
    '@vividcat',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
    ...basic.overrides,
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // 兼容 ts 的三斜线
        'spaced-comment': ['error', 'always', {
          markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',', '/']
        }]
      }
    }
  ],
  rules: {
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'none'
      },
      'singleline': {
        'delimiter': 'comma'
      }
    }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/ban-types': [
      'error',
      {
        'types': {
          'object': false,
          'Function': false
        }
      }
    ],
    // https://github.com/eslint/eslint/issues/13957
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2, { // 强制使用一致的缩进
      'SwitchCase': 1,
      'VariableDeclarator': 'first',
      'outerIIFEBody': 'off'
    }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    // off
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
}
