module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:react-hooks/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    'sort-keys-fix',
    'simple-import-sort',
    '@typescript-eslint',
    'sort-destructure-keys',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-var': 'error',
        'no-undef': 'off',
        'no-shadow': 'off',
        'no-alert': 'error',
        'no-debugger': 'error',
        'no-use-before-define': 'off',
        // 'no-magic-numbers': ['warn', { ignore: [1] }],
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'import/order': [
          'error',
          {
            'newlines-between': 'always-and-inside-groups',
            pathGroupsExcludedImportTypes: ['react'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
              'type',
            ],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
            ],
          },
        ],
        'import/first': 'error',
        'import/extensions': 'off',
        'import/no-duplicates': 'error',
        'import/prefer-default-export': 'off',
        'import/newline-after-import': 'error',
        'react/jsx-curly-brace-presence': [
          'error',
          { props: 'never', children: 'never' },
        ],
        'react/function-component-definition': [
          2,
          { namedComponents: 'arrow-function' },
        ],
        'sort-vars': 'error',
        'sort-keys': [
          'error',
          'asc',
          { caseSensitive: true, minKeys: 2, natural: true },
        ],
        // 'sort-keys-fix/sort-keys-fix': 'warn',
        'sort-destructure-keys/sort-destructure-keys': 2,
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
          },
        ],
      },
    },
  ],
};
