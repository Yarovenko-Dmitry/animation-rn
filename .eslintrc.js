module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'no-undef': 'off',
        'no-console': 'off',
        'no-debugger': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
};
