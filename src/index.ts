import commander from 'commander';
import packageJson from '../package.json';
import config from './config';

const program = commander
  .version(packageJson.version)
  .description('Quickly create front-end projects and configurations')
  .allowUnknownOption()
  .option('-s --server', 'Add server development configuration')
  .option('-n --npm', 'Add npm configuration')
  .option('-c --custom', 'Custom generate configuration');

// react
program
  .command('react')
  .alias('r')
  .description('Create React App')
  .option('-t --temp [mode]', 'Add server development configuration')
  .action(options => {
    console.log(options.temp, 11111);
  });

// react-native
program
  .command('react-native')
  .alias('rn')
  .description('Create React Native App')
  .action(() => {
    console.log(22222);
  });

// help
program.on('--help', () => {
  console.log(`
Examples:
  $ genfe --help
  $ genfe -h
  `);
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.help();
}

config(program);
