export const CONFIG_MANIFEST = {
  eslint: {
    default: true,
    assets: ['.eslintrc.yml', '.eslintignore'],
    package: [
      'eslint',
      'babel-eslint',
      'eslint-config-airbnb',
      'eslint-plugin-babel',
      'eslint-plugin-import',
      'eslint-plugin-jsx-a11y',
      'eslint-plugin-react',
    ],
  },
  typescript: {
    assets: ['tsconfig.json', 'tslint.json'],
    package: ['tslint', 'tslint-react', 'typescript'],
  },
  husky: {
    default: true,
    assets: ['.huskyrc'],
    package: ['husky'],
  },
  lintStaged: {
    default: true,
    assets: ['.lintstagedrc'],
    package: ['lint-staged'],
  },
  commitlint: {
    default: true,
    assets: ['commitlint.config.js'],
    package: ['@commitlint/cli', '@commitlint/config-conventional'],
  },
  nodemon: {
    assets: ['nodemon.json'],
    package: ['nodemon'],
  },
  prettier: {
    default: true,
    assets: ['.prettierrc'],
    package: ['prettier'],
  },
  babel: {
    assets: ['.babelrc', '.babel.js', 'babel.config.js'],
  },
  vscode: {
    assets: ['.vscode', 'jsconfig.json', '.editorconfig'],
  },
  npm: {
    assets: ['.npmignore', '.npmrc'],
  },
};
