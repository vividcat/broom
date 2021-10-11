const strictEslint = require('./src/eslint')
const softyEslint = require('./src/softyEslint')
const stylelint = require('./src/stylelint')
const prettier = require('./src/prettier')

module.exports = {
  stylelint,
  prettier,
  strictEslint,
  eslint: softyEslint,
  default: softyEslint
}
