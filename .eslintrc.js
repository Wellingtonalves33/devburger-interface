module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/react-in-jsx-scope': 'off',
      'import/prefer-default-export': 'off',
      'no-param-reassign': 'off',
    },
  };