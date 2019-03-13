import Commander from 'commander';
import packageJson from '../package.json';
import Generate from './generate';

const program = Commander.version(packageJson.version)
  .description('Quickly create front-end projects and configurations')
  .allowUnknownOption()
  .option('-a --all', 'Add all configuration')
  .option('-c --custom', 'Custom generate configuration')
  .option('-t --typescript', 'Add typescript configuration')
  .option('-b --babel <filename>', 'babel name', 'babel.config.js');

// react
program
  .command('react')
  .alias('r')
  .description('Create React App')
  .option('-m --mode [mode]', 'Add server development configuration', 'redux')
  .action(options => {
    console.log(options.temp, 11111);
  });

// react-native
program
  .command('react-native')
  .alias('rn')
  .description('Create React Native App')
  .action(options => {
    console.log(options.tent, 22222);
  });

// help
program.on('--help', () => {
  console.log(`
Examples:
  $ genfe --help
  $ genfe -h
  `);
});

new Generate(program).parse().run();
