import commander from 'commander';
import packageJson from '../package.json';

const program = commander
  .version(packageJson.version)
  .allowUnknownOption()
  .option(
    '-c, --cheese [type]',
    'Add the specified type of cheese [marble]',
    'marble'
  )
  .parse(process.argv);

console.log(program);
