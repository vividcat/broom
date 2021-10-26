/*!
 * https://eslint.bootcss.com/docs/rules/
 *
 * - 0: off
 * - 1: warn
 * - 2: error
 */

/** @type { import('eslint').Linter.BaseConfig } */
module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: 'eslint:recommended',
  rules: {
    'array-bracket-spacing': ['error', 'never', { // 强制数组方括号中使用一致的空格
      'singleValue': true,
      'objectsInArrays': false,
      'arraysInArrays': false
    }],
    'arrow-spacing': ['error', { // 强制箭头函数的箭头前后使用一致的空格
      'before': true,
      'after': true
    }],
    'block-scoped-var': 'warn',
    'block-spacing': ['error', 'always'], // 禁止或强制在代码块中开括号前和闭括号后有空格
    'brace-style': ['error', '1tbs', { // 强制在代码块中使用一致的大括号风格
      'allowSingleLine': true
    }],
    'camelcase': 'off', // 强制使用骆驼拼写法命名约定
    'comma-dangle': ['error', 'never'], // 要求或禁止末尾逗号
    'comma-spacing': ['error', { // 强制在逗号前后使用一致的空格
      'before': false,
      'after': true
    }],
    'comma-style': ['error', 'last'], // 强制使用一致的逗号风格
    'curly': ['error', 'multi-line'], // 强制所有控制语句使用一致的括号风格
    'default-case': 'error', // 要求 switch 语句中有 default 分支
    'default-case-last': 'off', // 要求 switch 语句中有 default 分支放在末尾
    'dot-location': ['error', 'property'], // 强制在点号之前或之后换行
    'eol-last': 'error', // 要求或禁止文件末尾存在空行
    'eqeqeq': ['error', 'allow-null'], // 要求使用 === 和 !==
    'func-call-spacing': 'error', // 要求或禁止在函数标识符和其调用之间有空格
    'generator-star-spacing': ['error', 'after'], // 强制 generator 函数中 * 号周围使用一致的空格
    'handle-callback-err': ['warn', '^(err|error|.+Error)$'], // 要求回调函数中有容错处理
    'indent': ['error', 2, { // 强制使用一致的缩进
      'SwitchCase': 1,
      'VariableDeclarator': 'first',
      'outerIIFEBody': 0
    }],
    'jsx-quotes': ['error', 'prefer-double'], // 强制在 JSX 属性中一致地使用双引号或单引号
    'key-spacing': 'error', // 强制在对象字面量的属性中键和值之间使用一致的间距
    'keyword-spacing': 'error', // 强制在对象字面量的属性中键和值之间使用一致的间距
    'lines-between-class-members': 'off',
    'new-cap': ['error', { // 要求构造函数首字母大写
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 'error', // 强制或禁止调用无参构造函数时有圆括号
    'no-alert': 'error', // 禁用 alert、confirm 和 prompt
    'no-array-constructor': 'error', // 禁用 Array 构造函数,
    'no-await-in-loop': 'error', // 禁止在循环中出现 await
    'no-caller': 'error', // 禁用 arguments.caller 或 arguments.callee
    'no-console': ['warn', {
      'allow': ['warn', 'error']
    }],
    'no-extend-native': 'warn', // 禁止扩展原生类型
    'no-extra-bind': 'error', // 禁止不必要的 .bind() 调用
    'no-extra-parens': ['error', 'functions'], // 禁止不必要的括号
    'no-eval': 'error', // 禁用 eval()
    'no-implied-eval': 'error', // 禁止使用类似 eval() 的方法
    'no-iterator': 'error', // 禁用 __iterator__ 属性
    'no-label-var': 'error', // 不允许标签与变量同名
    'no-labels': 'error', // 禁用标签语句
    'no-continue': 'error', // 禁用 continue 语句
    'no-lone-blocks': 'error', // 禁用不必要的嵌套块
    'no-multi-spaces': 'error', // 禁止出现多个空格
    'no-multi-str': 'error', // 禁止使用多行字符串
    'no-multiple-empty-lines': ['error', { // 禁止出现多行空行
      'max': 1
    }],
    'no-new-object': 'warn', // 禁用 Object 的构造函数
    'no-new-require': 'error', // 禁止调用 require 时使用 new 操作符
    'no-new-wrappers': 'error', // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-octal-escape': 'error', // 禁止在字符串中使用八进制转义序列
    'no-path-concat': 'warn', // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-proto': 'error', // 禁用 __proto__ 属性
    'no-return-assign': ['error', 'except-parens'], // 禁止在 return 语句中使用赋值语句
    'no-return-await': 'error', // 禁用不必要的 return await
    'no-restricted-syntax': [ // 禁止使用特定的语法
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'no-self-compare': 'warn', // 禁止自身比较
    'no-sequences': 'error', // 禁用逗号操作符
    'no-throw-literal': 'error', // 禁止抛出异常字面量
    'no-trailing-spaces': 'error', // 禁用行尾空格
    'no-undef-init': 'error', // 禁止将变量初始化为 undefined
    'no-unmodified-loop-condition': 'error', // 禁用一成不变的循环条件
    'no-unneeded-ternary': ['error', { // 禁止可以在有更简单的可替代的表达式时使用三元操作符
      'defaultAssignment': false
    }],
    'no-useless-computed-key': 'error', // 禁止在对象中使用不必要的计算属性
    'no-useless-constructor': 'error', // 禁用不必要的构造函数
    'no-whitespace-before-property': 'error', // 禁止属性前有空白
    'one-var': ['error', { // 强制函数中的变量要么一起声明要么分开声明
      'initialized': 'never'
    }],
    'operator-linebreak': ['error', 'after', { // 强制操作符使用一致的换行符
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'quotes': ['error', 'single', { // 强制使用一致的反勾号、双引号或单引号
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'quote-props': 'off', // 要求对象字面量属性名称使用引号
    'rest-spread-spacing': 'error', // 强制剩余和扩展运算符及其表达式之间有空格
    'require-atomic-updates': 'error', // 禁止由于 await 或 yield 的使用而可能导致出现竞态条件的赋值
    'semi': ['error', 'never'], // 要求或禁止使用分号代替 ASI
    'semi-spacing': ['error', { // 强制分号之前和之后使用一致的空格
      'before': false,
      'after': true
    }],
    'space-before-blocks': ['error', 'always'], // 强制在块之前使用一致的空格
    'space-before-function-paren': ['error', { // 强制在 function的左括号之前使用一致的空格
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'space-in-parens': 'error', // 强制在圆括号内使用一致的空格
    'space-infix-ops': 'error', // 要求操作符周围有空格
    'space-unary-ops': ['error', { // 强制在一元操作符前后使用一致的空格
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': ['error', 'always', { // 强制在注释中 // 或 /* 使用一致的空格
      'line': { 'markers': ['*package', '!', '/', ',', '='] },
      'block': { 'balanced': true, 'markers': ['*package', '!', ',', ':', '::', 'flow-include'], 'exceptions': [ '*' ] },
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'switch-colon-spacing': ['error', { // 强制在 switch 的冒号左右有空格
      'before': false,
      'after': true
    }],
    'template-curly-spacing': ['error', 'always'], // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'wrap-iife': ['error', 'outside'], // 要求 IIFE 使用括号括起来
    'yield-star-spacing': ['error', 'after'], // 强制在 yield* 表达式中 * 周围使用空格
    'yoda': ['error', 'never'], // 要求或禁止 “Yoda” 条件
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
    'no-use-before-define': ['error', { functions: false, classes: false, variables: true }] // 禁止定义前使用
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
