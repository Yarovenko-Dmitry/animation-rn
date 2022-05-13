//  for react-native projects
module.exports = {
  root: true,
  extends: [
    //  https://github.com/eslint/eslint/blob/main/conf/eslint-recommended.js
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    //  https://github.com/facebook/react-native/blob/main/packages/eslint-config-react-native-community/index.js
    '@react-native-community',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  env: { es6: true },
  plugins: [
    // https://github.com/import-js/eslint-plugin-import
    'import',
    'sort-destructure-keys',
    'sort-keys-fix',
    //  https://github.com/jsx-eslint/eslint-plugin-react
    'react',
    //  https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // dev part
        'no-debugger': 'off',
        'no-unused-vars': 'warn',
        'no-console': 'off',
        'no-magic-numbers': 'off',
        'no-shadow': 'warn',
        'prefer-const': 'warn',
        'prefer-destructuring': 'warn',
        'prefer-template': 'warn',
        'require-await': 'warn',
        yoda: 'warn',

        // common JS
        'no-duplicate-imports': 'error',
        'no-template-curly-in-string': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unreachable-loop': 'error',
        'no-use-before-define': 'off',
        'require-atomic-updates': 'error',
        eqeqeq: ['error', 'always'],
        'no-alert': 'error',
        'no-bitwise': 'error',
        'no-floating-decimal': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-unneeded-ternary': 'error',
        'no-param-reassign': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'sort-keys': [
          'error',
          'asc',
          { caseSensitive: true, natural: true, minKeys: 2 },
        ],
        'sort-vars': 'error',
        'array-bracket-spacing': ['error', 'never'],
        'arrow-spacing': 'error',
        'block-spacing': ['error', 'never'],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'func-call-spacing': ['error', 'never'],
        'generator-star-spacing': ['error', 'after'],
        'no-multi-spaces': ['error', { ignoreEOLComments: true }],
        'no-multiple-empty-lines': ['error', { max: 2 }],
        'no-trailing-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': ['error', 'always'],
        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: '*', next: 'return' },
        ],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'rest-spread-spacing': ['error', 'never'],
        semi: 'error',
        'semi-spacing': 'error',
        'space-before-function-paren': ['error', 'always'],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'switch-colon-spacing': 'error',
        'template-curly-spacing': 'error',
        'wrap-regex': 'error',
        'yield-star-spacing': ['error', 'after'],

        // JSX
        'jsx-quotes': ['error', 'prefer-single'],

        // import-sort
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/extensions': 'warn',
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              ['sibling', 'parent'],
              'index',
              'object',
              'unknown',
              'type',
            ],
            pathGroups: [
              { pattern: 'react', group: 'external', position: 'before' },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always-and-inside-groups',
            alphabetize: { order: 'asc', caseInsensitive: true },
          },
        ],
        'import/newline-after-import': ['error', { count: 1 }],
        'import/no-default-export': 'error',
        'import/no-anonymous-default-export': 'error',

        //  sort-destructure-keys
        'sort-destructure-keys/sort-destructure-keys': 2,

        //  sort-keys-fix/sort-keys-fix
        //  conflict with sort-keys when number-keys
        'sort-keys-fix/sort-keys-fix': 'warn',

        //  react
        'react/function-component-definition': [
          2,
          { namedComponents: 'arrow-function' },
        ],
        'react/jsx-curly-brace-presence': [
          'error',
          { props: 'never', children: 'never' },
        ],

        //  @typescript-eslint
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          { allowExpressions: true },
        ],
      },
    },
  ],
};
