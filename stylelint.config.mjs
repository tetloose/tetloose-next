/** @type {import('stylelint').Config} */
const stylelintConfig = {
  extends: ['stylelint-config-standard'],
  plugins: ['@stylistic/stylelint-plugin'],
  rules: {
    '@stylistic/declaration-colon-space-after': 'always-single-line',
    '@stylistic/max-empty-lines': 1,
    '@stylistic/string-quotes': 'single',
    '@stylistic/indentation': 2,
    '@stylistic/block-opening-brace-space-before': 'always',
    'color-named': ['never', { ignore: ['inside-function'] }],
    '@stylistic/color-hex-case': 'lower',
    'color-hex-length': 'short',
    '@stylistic/selector-combinator-space-after': 'always',
    '@stylistic/selector-attribute-operator-space-before': 'never',
    '@stylistic/selector-attribute-operator-space-after': 'never',
    '@stylistic/selector-attribute-brackets-space-inside': 'never',
    '@stylistic/selector-pseudo-class-parentheses-space-inside': 'never',
    '@stylistic/declaration-block-trailing-semicolon': 'always',
    '@stylistic/declaration-colon-space-before': 'never',
    '@stylistic/max-line-length': 200,
    'max-nesting-depth': [
      3,
      {
        ignore: ['pseudo-classes', 'blockless-at-rules']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'theme',
          'plugin',
          'custom-variant',
          'layer',
          'apply',
          'utility',
          'source'
        ]
      }
    ],
    'import-notation': null,
    'function-no-unknown': null,
    'no-descending-specificity': null
  },
  ignoreFiles: [
    '.scripts',
    'node_modules',
    'build',
    'storybook-static',
    'coverage'
  ]
}

export default stylelintConfig
