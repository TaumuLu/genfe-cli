import Commander from 'commander'
import inquirer from 'inquirer'
import packageJson from '../package.json'
import configs, { defaultKeys } from './config'
import Generate from './generate'

const generate = new Generate()

const program = new Commander.Command()
  .name(packageJson.name)
  .version(packageJson.version)
  .usage('[options] command')
  .description('Quickly create front-end projects and configurations')
  .allowUnknownOption()
  .arguments('[project-directory]')
  .option('-d, --default', 'create default config')
  .action(async (dir, cmdObj) => {
    generate.setDir(dir)
    let selectModules = defaultKeys
    if (!cmdObj.default) {
      const choices = Object.keys(configs).map((name) => {
        const { default: checked } = configs[name]
        return {
          name,
          checked
        }
      })
      const questions = [{
        name: 'modules',
        message: 'select generate modules',
        type: 'checkbox',
        choices,
        pageSize: process.stdout.rows - 2
      }]
      const values = await inquirer.prompt(questions)
      const { modules } = values
      selectModules = modules as any
    }

    selectModules.forEach((key) => {
      const { assets = [], devDependencies = [] } = configs[key]
      generate.addFiles(assets)
      generate.addDepends(devDependencies)
    })

    generate.run()
  })

// react
// program
//   .command('react')
//   .alias('r')
//   .description('Create React App')
//   .option('-m --mode [mode]', 'Add server development configuration', 'redux')
//   .action(options => {
//     console.log(options.mode, 11111)
//   })

// // react-native
// program
//   .command('react-native')
//   .alias('rn')
//   .description('Create React Native App')
//   .action(options => {
//     console.log(options.tent, 22222)
//   })

// help
// program.on('--help', () => {
// program.outputHelp
//   console.log(`
// Examples:
//   $ genfe --help
//   $ genfe -h
//   `)
// })

program.parse(process.argv)

// if (!process.argv.slice(2).length) {
//   program.help()
// }
