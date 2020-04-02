import { ConfigType } from './types'

export const options = {
  default: {
    flags: '-d, --default',
    description: 'create default config'
  },
  install: {
    flags: '--no-generate',
    description: 'Do not generate configuration'
  },
  generate: {
    flags: '--no-install',
    description: 'Do not install dependencies'
  }
}

export type IOptionsKeys = keyof typeof options

export type IOptions = {
  [k in IOptionsKeys]: boolean
}

export const configs = {
  husky: {
    default: true,
    assets: ['.huskyrc'],
    devDependencies: ['husky']
  },
  lintStaged: {
    default: true,
    assets: ['.lintstagedrc'],
    devDependencies: ['lint-staged']
  },
  commitlint: {
    default: true,
    assets: ['commitlint.config.js'],
    devDependencies: ['@commitlint/cli', '@commitlint/config-conventional']
  },
  prettier: {
    default: true,
    assets: ['.prettierrc'],
    devDependencies: ['prettier']
  },
  typescript: {
    default: true,
    assets: ['tsconfig.json'],
    devDependencies: ['typescript']
  },
  eslint: {
    default: true,
    assets: ['.eslintrc.js', '.eslintignore'],
    devDependencies: [
      'eslint',
      'eslint-config-airbnb',
      'eslint-plugin-babel',
      'eslint-plugin-import',
      'eslint-plugin-jsx-a11y',
      'eslint-plugin-react',
      'eslint-plugin-react-hooks',
      'eslint-config-prettier',
      'eslint-plugin-prettier',
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
      'eslint-plugin-jest'
    ]
  },
  nodemon: {
    assets: ['nodemon.json'],
    devDependencies: ['nodemon']
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
      '@babel/plugin-transform-runtime'
    ]
  },
  browserslist: {
    assets: ['.browserslistrc']
  },
  settings: {
    type: ConfigType.Vscode,
    assets: ['.vscode/settings.json']
  },
  jsconfig: {
    type: ConfigType.Vscode,
    assets: ['jsconfig.json']
  },
  editorconfig: {
    type: ConfigType.Vscode,
    assets: ['.editorconfig']
  },
  npmrc: {
    type: ConfigType.Npm,
    assets: ['.npmrc']
  },
  npmignore: {
    type: ConfigType.Npm,
    assets: [
      {
        from: 'config/npmignore',
        to: '.npmignore'
      }
    ]
  },
  git: {
    type: ConfigType.Git,
    assets: [
      {
        from: 'config/gitignore',
        to: '.gitignore'
      }
    ]
  }
}
