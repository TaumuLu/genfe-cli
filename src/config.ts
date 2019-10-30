import { ConfigType, IConfigs, IDictionary } from './types'

const configs = {
  typescript: {
    default: true,
    assets: ['tsconfig.json'],
    devDependencies: ['typescript'],
  },
  tslint: {
    default: true,
    assets: ['tslint.json'],
    devDependencies: ['tslint', 'tslint-react'],
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
    assets: ['.eslintrc.yml', '.eslintignore'],
    devDependencies: [
      'eslint',
      'babel-eslint',
      'eslint-config-airbnb',
      'eslint-plugin-babel',
      'eslint-plugin-import',
      'eslint-plugin-jsx-a11y',
      'eslint-plugin-react',
    ],
  },
  nodemon: {
    assets: ['nodemon.json'],
    devDependencies: ['nodemon'],
  },
  babel: {
    assets: ['babel.config.js'],
    devDependencies: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-decorators',
      '@babel/plugin-transform-runtime'
    ]
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
    assets: ['.npmrc']
  },
  npmignore: {
    type: ConfigType.Npm,
    assets: ['.npmignore'],
  }
}

export default configs
