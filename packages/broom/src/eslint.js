/* eslint-disable no-console */
const path = require('path')
const fs = require('fs')

const parserOptions = {
  ecmaFeatures: {
    jsx: true
  },
  babelOptions: {
    presets: ['@babel/preset-env', '@babel/preset-typescript'],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }]
    ]
  },
  requireConfigFile: false,
  project: './tsconfig.json'
}

const isJsMoreTs = async (path = 'src') => {
  const fg = require('fast-glob')
  const jsFiles = await fg(`${ path }/src/**/*.{js,jsx}`, { deep: 3 })
  const tsFiles = await fg(`${ path }/src/**/*.{ts,tsx}`, { deep: 3 })
  return jsFiles.length > tsFiles.length
}

const isTsProject = fs.existsSync(path.join(process.cwd() || '.', './tsconfig.json'))

if (isTsProject) {
  try {
    isJsMoreTs(process.cwd()).then((jsMoreTs) => {
      if (!jsMoreTs) return
      console.log('这是一个 TypeScript 项目，如果不是请删除 tsconfig.json')
    })
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  extends: isTsProject ? '@vividcat/typescript' : '@vividcat',
  parser: isTsProject ? '@typescript-eslint/parser' : '@babel/eslint-parser',
  plugins: [ 'jest' ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true
  },
  rules: {
    // Conflict with prettier
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'no-param-reassign': 2,
    'space-before-function-paren': 0
  },
  settings: {
    // support import modules from TypeScript files in JavaScript files
    'import/resolver': {
      node: {
        extensions: isTsProject ? ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] : ['.js', '.jsx']
      }
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts']
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    polyfills: ['fetch', 'Promise', 'URL', 'object-assign']
  },
  parserOptions
}
