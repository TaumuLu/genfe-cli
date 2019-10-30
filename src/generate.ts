import { execSync } from 'child_process'
import { copyFileSync, existsSync, mkdirSync, statSync } from 'fs'
import path from 'path'

export default class Generate {
  cwd = process.cwd()
  cliDir = path.resolve(__dirname, '../')
  dir: string = this.cwd
  dependencies: Set<string> = new Set<string>()
  devDependencies: Set<string> = new Set<string>()
  files: Set<string> = new Set<string>()
  folder: string

  setDir(dir: string = './') {
    this.dir = path.resolve(dir)
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

  async exec(command: string) {
    const { cwd } = this
    console.log(`exec command: ${command}`)
    console.log(11111, cwd)
    return execSync(command, { cwd })
  }

  async run() {
    if (!existsSync(this.dir)) {
      mkdirSync(this.dir)
    } else if (!statSync(this.dir).isDirectory()) {
      throw new Error(`${this.dir}`)
    }
    await this.genFolder()
    await this.genFile()
    // await this.install()
  }

  async genFolder() {
    // if (this.folder) {
    // }
  }

  checkPath(filePath) {

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
          await this.copyFile(targetPath, sourcePath)
        }
      }
    }
  }

  async install() {
    const { dependencies, devDependencies } = this

    if (dependencies.size) {
      this.exec(`npm i ${[...dependencies].join(' ')}`)
    }
    if (devDependencies) {
      this.exec(`npm i ${[...devDependencies].join(' ')} -D`)
    }
  }

  copyFile(targetPath, sourcePath) {
    copyFileSync(sourcePath, targetPath)
  }

  async mergeFile(targetPath, mergePath) {
    return this.exec(`git merge-file -L current-config -L null -L cli-config ${targetPath} /dev/null ${mergePath}`).catch(() => {})
  }
}
