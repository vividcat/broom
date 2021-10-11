# broom

关于lint代码的配置文件合集（自用），Forked 自 [`umi-fabric`](https://github.com/umijs/fabric)

### 安装

```bash
npm i @vividcat/broom --save-dev
yarn add @vividcat/broom -D
```

##### 和原本有些不同：

1. 变了个自己可以自己的名称，fabric 实在记不住😔
2. 移除了对于 react 的依赖，适合自己使用的配置
3. stylelint 增加了对 scss 的支持
4. 移除了测试（懒的测试）
5. 直接使用 js

<details>
<summary>原始 README</summary>
# umi-fabric

一个包含 prettier，eslint，stylelint 的配置文件合集

A collection of configuration files containing prettier, eslint, stylelint

# Use

安装

```bash
npm i @umijs/fabric --save-dev
yarn add @umijs/fabric -D
```

in `.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  // in antd-design-pro
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },

  rules: {
    // your rules
  },
};
```

in `.stylelintrc.js`

```js
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/stylelint')],
  rules: {
    // your rules
  },
};
```

in `.prettierrc.js`

```js
const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
};
```
</details>
