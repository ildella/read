import nostandard from 'eslint-nostandard'
import globals from 'globals'
// import json from '@eslint/json'

const camelcase = ['warn',
  {
    allow: [
      'created_at',
    ],
  }]

// const noMissingRequires = ['error', {
//   allowModules: [],
// }]

const ignores = [
  'dist/',
  'docs/',
  // 'manifest/',
]

export default [
  {
    name: 'Frankie Web Extension',
    ignores,
  },
  ...nostandard(),
  {
    name: 'frankie/webextension/src',
    files: ['src/**/*.js', '*.cjs'],
    languageOptions: {
      sourceType: 'module',
      // TODO: split this between content-scripts and background files.
      globals: {
        ...globals.browser,
        ...globals.webextensions,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
          globalReturn: false,
          jsx: false,
        },
      },
    },
    // plugins: {
    //   '@stylistic/js': stylisticJs,
    // },
    rules: {
      // ...js.configs.recommended.rules,
      // ...eslintCoreRules,
      // ...eslintCoreStylisticRules,
      camelcase,
      'max-len': ['warn', {code: 250}],
      'no-undefined': 'warn',
    },
  },
  {
    name: 'frankie/webextension/manifest',
    files: ['manifest/**/*.js'],
    rules: {
      camelcase: 'off',
    },
  },
  // {
  //   name: 'frankie/json',
  //   files: ['**/*.json'],
  //   plugins: {
  //     json,
  //   },
  //   language: 'json/json',
  //   rules: {
  //     'json/no-duplicate-keys': 'error',
  //   },
  // },
]

// console.log(globals.browser)
// console.log(Object.keys(globals))
