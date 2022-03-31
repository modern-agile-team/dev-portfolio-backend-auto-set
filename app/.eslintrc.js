module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['import', '@typescript-eslint', 'prettier'],
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: [`${__dirname}/tsconfig.json`],
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ['node_modules/'],
  rules: {
    // 배포 전에 on
    'no-console': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/prefer-default-export': 'off',
    'except-after-single-line': false, // 클래스 멤버 변수 선언 시 한 줄 공백 생기지 않도록 설정
    // 불필요한 catch 사용
    'no-useless-catch': 'off',
    'prettier/prettier': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
