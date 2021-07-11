module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    semi: 'off', // must disable base rule to enable typescript version
    '@typescript-eslint/semi': ['warn'],
    'no-unused-vars': 'off', // must disable base rule to enable typescript version
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        args: 'after-used',
      },
    ],
    'no-undef': 'off', // ignores for js config files
    'no-multiple-empty-lines': [
      1,
      {
        max: 1,
        maxBOF: 0,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'max-len': ['warn', { code: 140 }],
    'no-console': 'error',
    'ordered-imports': 'off',
    quotes: ['warn', 'single'],
    'sort-keys': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
