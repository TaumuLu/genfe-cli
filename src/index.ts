import Commander from 'commander'
import inquirer from 'inquirer'
import packageJson from '../package.json'
import { configs, options, IOptions, IOptionsKeys } from './config'
import Generate from './generate'

const generate = new Generate()

const defaultKeys = Object.keys(configs).reduce<Array<string>>(
  (p, k) => (configs[k].default ? p.concat(k) : p),
  []
)

const program = new Commander.Command()

Object.keys(options).forEach((key: IOptionsKeys) => {
  const { flags, description } = options[key]
  program.option(flags, description)
})

program
  .name(packageJson.name)
  .version(packageJson.version)
  .usage('[options] command')
  .description('Quickly create front-end projects and configurations')
  .allowUnknownOption()
  .arguments('[project-directory]')
  .action(async (dir, cmdObj: IOptions) => {
    let selectModules = defaultKeys
    if (!cmdObj.default) {
      const choices = Object.keys(configs).map(name => {
        const { default: checked } = configs[name]
        return {
          name,
          checked,
        }
      })
      const questions = [
        {
          name: 'modules',
          message: 'select generate modules',
          type: 'checkbox',
          choices,
          pageSize: process.stdout.rows - 2,
        },
      ]
      const values = await inquirer.prompt(questions)
      const { modules } = values
      selectModules = modules as string[]
    }

    generate.setDir(dir)
    selectModules.forEach(key => {
      const { assets = [], devDependencies = [] } = configs[key]
      generate.addFiles(assets)
      generate.addDepends(devDependencies)
    })

    generate.run(cmdObj)
  })

program.parse(process.argv)
