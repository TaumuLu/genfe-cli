import Commander from 'commander'
import packageJson from '../package.json'
import configs from './config'
import Generate from './generate'

const generate = new Generate()

const program = new Commander.Command()
  .name(packageJson.name)
  .version(packageJson.version)
  .usage('[options]')
  .description('Quickly create front-end projects and configurations')
  .allowUnknownOption()
  .arguments('[project-directory]')
  .option('-b --babel <items>', 'babel name', 'babel.config.js')
  .action((dir) => {
    generate.setDir(dir)
    const { assets, devDependencies } = configs.typescript
    generate.addFiles(assets)
    generate.addDepends(devDependencies)
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


generate.run()

// if (!process.argv.slice(2).length) {
//   program.help()
// }
