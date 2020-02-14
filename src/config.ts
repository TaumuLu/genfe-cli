import { ConfigType } from './types'

const configs = {
  typescript: {
    default: true,
    assets: ['tsconfig.json'],
    devDependencies: ['typescript'],
  },
  husky: {
    default: true,
    assets: ['.huskyrc'],
    devDependencies: ['husky'],
  },
  lintStaged: {
    default: true,
    assets: ['.lintstagedrc'],
    devDependencies: ['lint-staged'],
  },
  commitlint: {
    default: true,
    assets: ['commitlint.config.js'],
    devDependencies: ['@commitlint/cli', '@commitlint/config-conventional'],
  },
  prettier: {
    default: true,
    assets: ['.prettierrc'],
    devDependencies: ['prettier'],
  },
  eslint: {
    default: true,
    assets: ['.eslintrc.js', '.eslintignore'],
    devDependencies: [
      'eslint',
      'babel-eslint',
      'eslint-config-airbnb',
      'eslint-plugin-babel',
      'eslint-plugin-import',
      'eslint-plugin-jsx-a11y',
      'eslint-plugin-react',
      'eslint-plugin-react-hooks',
      'eslint-plugin-prettier',
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
    ],
  },
  nodemon: {
    assets: ['nodemon.json'],
    devDependencies: ['nodemon'],
  },
  babel: {
    assets: ['babel.config.js'],
    devDependencies: [
      '@babel/core',
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-decorators',
      '@babel/plugin-transform-runtime',
    ],
  },
  browserslist: {
    assets: ['.browserslistrc'],
  },
  settings: {
    type: ConfigType.Vscode,
    assets: ['.vscode/settings.json'],
  },
  jsconfig: {
    type: ConfigType.Vscode,
    assets: ['jsconfig.json'],
  },
  editorconfig: {
    type: ConfigType.Vscode,
    assets: ['.editorconfig'],
  },
  npmrc: {
    type: ConfigType.Npm,
    assets: ['config/.npmrc'],
  },
  npmignore: {
    type: ConfigType.Npm,
    assets: ['config/.npmignore'],
  },
}

export default configs

export const defaultKeys = Object.keys(configs).reduce(
  (p, k) => (configs[k].default ? p.concat(k) : p),
  []
)
