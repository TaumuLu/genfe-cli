export interface IDictionary<T = any> {
  [key: string]: T
}

export enum ConfigType {
  Module = 'Module',
  Vscode = 'Vscode',
  Npm = 'Npm'
}

export interface IConfigs {
  type?: ConfigType
  default?: boolean
  assets: string[]
  devDependencies?: string[]
}
