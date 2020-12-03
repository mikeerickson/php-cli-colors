module.exports = {
  env: {
    es6: true,
    node: true,
    jest: false
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-console': [
      'error',
      {
        allow: ['log', 'error', 'dir']
      }
    ]
  }
}
