import { execSync } from 'child_process'
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'fs'
import path from 'path'
import { conflictReg, labelNames } from './constant'

export default class Generate {
  cwd = process.cwd()
  dir: string = this.cwd
  cliDir = path.resolve(__dirname, '../')
  packagePath: string = ''
  dependencies: Set<string> = new Set<string>()
  devDependencies: Set<string> = new Set<string>()
  files: Set<string> = new Set<string>()
  folder: string

  setDir(dir: string = './') {
    this.dir = path.resolve(dir)
    this.packagePath = path.resolve(this.dir, 'package.json')
  }

  addDepend(value: string, isDev: boolean = true) {
    if (isDev) {
      this.devDependencies.add(value)
    } else {
      this.dependencies.add(value)
    }
  }

  addDepends = (values: string[], isDev?: boolean) => {
    values.forEach((value) => {
      this.addDepend(value, isDev)
    })
  }

  setFolder(folder: string) {
    this.folder = folder
  }

  addFile(file: string) {
    this.files.add(file)
  }

  addFiles = (files: string[]) => {
    files.forEach((file) => {
      this.addFile(file)
    })
  }

  async exec(command: string, throwError = false) {
    const cwd = this.dir
    let stdout: Buffer
    try {
      console.log(`exec command: ${command}`)
      stdout = execSync(command, { cwd })
    } catch (error) {
      if (throwError) {
        throw error
      }
    }
    return stdout
  }

  async run() {
    if (!existsSync(this.dir)) {
      mkdirSync(this.dir)
    } else if (!statSync(this.dir).isDirectory()) {
      throw new Error(`${this.dir}`)
    }
    // await this.genFolder()
    await this.genFile()
    await this.install()
  }

  async genFolder() {
    // if (this.folder) {
    // }
  }

  async genFile() {
    const { files } = this

    if (files.size) {
      for (const file of files) {
        const sourcePath = path.resolve(this.cliDir, file)
        const targetPath = path.resolve(this.dir, file)
        if (existsSync(targetPath)) {
          await this.mergeFile(targetPath, sourcePath)
        } else {
          await copyFileSync(sourcePath, targetPath)
        }
      }
    }
  }

  async install() {
    const { dependencies, devDependencies } = this
    if (!existsSync(this.packagePath)) {
      this.exec('npm init -y')
    }
    if (dependencies.size) {
      this.exec(`npm i ${[...dependencies].join(' ')}`)
    }
    if (devDependencies.size) {
      this.exec(`npm i ${[...devDependencies].join(' ')} -D`)
    }
  }

  async mergeFile(targetPath, mergePath) {
    const [currentName, cliName] = labelNames
    const code = readFileSync(targetPath, 'utf-8')
    // const value = await this.exec('git diff --check | cat')

    if (conflictReg.test(code)) {
      console.log(`fail: conflict file ${targetPath}`)
      return null
    } else {
      return this.exec(`git merge-file -L ${currentName} -L null -L ${cliName} ${targetPath} /dev/null ${mergePath}`)
    }
  }
}
