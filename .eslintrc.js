module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 11,
    sourceType: 'module',
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: [],

  rules: {
    'react/prop-types': 0,
  },
};
