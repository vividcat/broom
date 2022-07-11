# @vividcat/broom

[![npm version][npm-version-src]][npm-version-href]

<br>

从 3.0.0 版本开始，正式以 [`@antfu/eslint-config@>=0.25.2`](https://github.com/antfu/eslint-config) 为基础，之前各个包版本各自维护版本号，全部以 3.0.0 开始发布。

规则会稍微调整：

- `if / else` 适当放松，无需刻意消除花括弧


对比 1.x，2.x 有些规则作出了变化：

1. [quote-props](https://eslint.org/docs/latest/rules/quote-props)

调整： "off" -> "关键字必须引号"包裹

2. [comma-dangle](https://typescript-eslint.io/rules/comma-dangle/)

调整： "末尾无逗号" -> "必须存在逗号"包裹

<!-- Badges -->
[npm-version-src]: https://img.shields.io/badge/version-3.0.0-%234d9375?style=for-the-badge
[npm-version-href]: https://www.npmjs.com/package/@vividcat/broom
