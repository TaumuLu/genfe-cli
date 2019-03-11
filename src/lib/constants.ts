export const CONFIG_MANIFEST = {
  eslint: {
    assets: ['.eslintrc.yml', '.eslintignore'],
  },
  typescript: {
    alias: 'ts',
    assets: ['tsconfig.json', 'tslint.json'],
  },
  husky: {
    assets: ['.huskyrc'],
  },
  'lint-staged': {
    assets: ['.lintstagedrc'],
  },
  commitlint: {
    assets: ['commitlint.config.js'],
  },
  nodemon: {
    assets: ['nodemon.json'],
  },
  prettier: {
    assets: ['.prettierrc'],
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
