/*!
 * https://eslint.bootcss.com/docs/rules/
 *
 * - 0: off
 * - 1: warn
 * - 2: error
 */

/** @type { import('eslint').Linter.BaseConfig } */
module.exports = {
  env: {
    es6: true,
    browser: true
  },
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended'
  ],
  plugins: [
    'unicorn'
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] }
    }
  },
  rules: {
    'array-bracket-spacing': ['error', 'never', { // 强制数组方括号中使用一致的空格
      'singleValue': true,
      'objectsInArrays': false,
      'arraysInArrays': false
    }],
    'camelcase': 'off', // 强制使用骆驼拼写法命名约定
    'comma-dangle': ['error', 'never'], // 要求或禁止末尾逗号
    'default-case': 'error', // 要求 switch 语句中有 default 分支
    'default-case-last': 'error', // 要求 switch 语句中有 default 分支放在末尾
    'dot-notation': 'off', // 要求使用点号
    'generator-star-spacing': ['error', 'after'], // 强制 generator 函数中 * 号周围使用一致的空格
    'handle-callback-err': ['warn', '^(err|error|.+Error)$'], // 要求回调函数中有容错处理
    'indent': ['error', 2, { // 强制使用一致的缩进
      'SwitchCase': 1,
      'VariableDeclarator': 'first',
      'outerIIFEBody': 'off'
    }],
    'jsx-quotes': ['error', 'prefer-double'], // 强制在 JSX 属性中一致地使用双引号或单引号
    'lines-between-class-members': 'off',
    'no-await-in-loop': 'error', // 禁止在循环中出现 await
    'no-console': ['warn', {
      'allow': ['warn', 'error']
    }],
    'no-alert': 'error',
    'no-implied-eval': 'error', // 禁止使用类似 eval() 的方法
    'no-inner-declarations': ['error', 'functions'], // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-iterator': 'error', // 禁用 __iterator__ 属性
    'no-label-var': 'error', // 不允许标签与变量同名
    'no-continue': 'error', // 禁用 continue 语句
    'no-new-require': 'error', // 禁止调用 require 时使用 new 操作符
    'no-path-concat': 'warn', // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-return-await': 'error', // 禁用不必要的 return await
    'no-restricted-syntax': [ // 禁止使用特定的语法
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'no-unmodified-loop-condition': 'warn', // 禁用一成不变的循环条件
    'padded-blocks': ['error', 'never'], // 要求或禁止块内填充
    'quotes': ['error', 'single', { // 强制使用一致的反勾号、双引号或单引号
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'quote-props': 'off', // 要求对象字面量属性名称使用引号
    'space-before-function-paren': ['error', { // 强制在 function的左括号之前使用一致的空格
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'spaced-comment': ['error', 'always', { // 强制在注释中 // 或 /* 使用一致的空格
      'line': { 'markers': ['*package', '!', '/', ',', '='] },
      'block': { 'balanced': true, 'markers': ['*package', '!', ',', ':', '::', 'flow-include'], 'exceptions': [ '*' ] },
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': ['error', 'always'], // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'wrap-iife': ['error', 'outside'], // 要求 IIFE 使用括号括起来
    'yield-star-spacing': ['error', 'after'], // 强制在 yield* 表达式中 * 周围使用空格

    // es6
    'sort-imports': 'off',
    'prefer-const': [ // 要求使用 const 声明那些声明后不再被修改的变量
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true
      }
    ],
    'prefer-rest-params': 'error', // 要求使用剩余参数而不是 arguments
    'no-use-before-define': ['error', { functions: false, classes: false, variables: true }], // 禁止定义前使用

    // unicorns
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/prevent-abbreviations': 'off',

    // eslint-comments
    'eslint-comments/disable-enable-pair': 'off',

    // import
    'import/order': 'off', // 移除，好像强迫症患者啊
    'import/no-mutable-exports': 'off',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'import/no-named-as-default-member': 'off'
  },
  overrides: [
    {
      files: ['scripts/**/*.*', 'build/**/*'],
      rules: {
        'no-console': 'off'
      }
    }
  ]
}
