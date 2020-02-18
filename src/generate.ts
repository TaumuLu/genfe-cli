import chalk from 'chalk'
import execa from 'execa'
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'fs'
import path from 'path'
import ora from 'ora'
import { conflictReg, labelNames } from './constant'

type IAsset = string | { from: string; to: string }

export default class Generate {
  cwd = process.cwd()

  dir: string = this.cwd

  cliDir = path.resolve(__dirname, '../')

  packagePath = ''

  dependencies: Set<string> = new Set<string>()

  devDependencies: Set<string> = new Set<string>()

  files: Set<IAsset> = new Set<string>()

  folder: string

  setDir(dir = './') {
    this.dir = path.resolve(dir)
    this.packagePath = path.resolve(this.dir, 'package.json')
  }

  addDepend(value: string, isDev = true) {
    if (isDev) {
      this.devDependencies.add(value)
    } else {
      this.dependencies.add(value)
    }
  }

  addDepends = (values: string[], isDev?: boolean) => {
    values.forEach(value => {
      this.addDepend(value, isDev)
    })
  }

  setFolder(folder: string) {
    this.folder = folder
  }

  addFile(file: IAsset) {
    this.files.add(file)
  }

  addFiles = (files: string[]) => {
    files.forEach(file => {
      this.addFile(file)
    })
  }

  async exec(command: string, isSpinner = true) {
    const cwd = this.dir
    const [file, ...args] = command.split(' ')
    let spinner: ora.Ora
    if (isSpinner) {
      spinner = ora(`Installing using ${chalk.green(file)}...`)
      spinner.start()
    }
    return execa(file, args, { cwd })
      .finally(() => {
        if (isSpinner) spinner.stop()
      })
      .then(output => {
        console.log(output.stdout)
        console.log(output.stderr)
        return output
      })
      .catch(err => {
        throw err
      })
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

  // async genFolder() {
  //   if (this.folder) {
  //   }
  // }

  async checkPath(pathStr: string, mkPath?: boolean) {
    const index = pathStr.lastIndexOf('/')
    const parentPath = pathStr.slice(0, index)
    if (!existsSync(parentPath)) {
      return this.checkPath(parentPath, true)
    }
    if (mkPath) {
      return mkdirSync(pathStr)
    }
    return null
  }

  async genFile() {
    const { files } = this

    if (files.size) {
      for (const file of files) {
        const { from, to } =
          typeof file === 'string' ? { from: file, to: file } : file
        const sourcePath = path.resolve(this.cliDir, from)
        const targetPath = path.resolve(this.dir, to)
        if (existsSync(targetPath)) {
          await this.mergeFile(targetPath, sourcePath)
        } else {
          await this.checkPath(targetPath)
          await copyFileSync(sourcePath, targetPath)
        }
      }
    }
  }

  async checkPackageJson() {
    const packageJsonPath = path.resolve(this.dir, 'package.json')
    if (!existsSync(packageJsonPath)) {
      console.log(
        chalk.yellow('No package.json file found, created by default')
      )
      await this.exec('npm init -y', false)
      return false
    }
    return true
  }

  async install() {
    const { dependencies, devDependencies } = this
    const options = ['--save', '--save-dev']
    return [dependencies, devDependencies].reduce<any>((p, c, i) => {
      if (c.size) {
        const option = options[i]
        return Promise.resolve(p).then(() =>
          this.exec(`npm i ${[...c].join(' ')} ${option}`)
        )
      }
      return p
    }, this.checkPackageJson())
  }

  async mergeFile(targetPath, mergePath) {
    const [currentName, cliName] = labelNames
    const code = readFileSync(targetPath, 'utf-8')
    // const value = await this.exec('git diff --check | cat')

    if (conflictReg.test(code)) {
      console.log(
        chalk.red('Merge config fail:'),
        chalk.gray('conflict file'),
        targetPath
      )
      return null
    }
    return this.exec(
      `git merge-file -L ${currentName} -L null -L ${cliName} ${targetPath} /dev/null ${mergePath}`,
      false
    ).catch(() => {
      console.log(chalk.yellow('conflict file:'), targetPath)
    })
  }
}
