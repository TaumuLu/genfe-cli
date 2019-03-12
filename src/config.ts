import { CONFIG_MANIFEST } from './lib/constants';

const assetslist = [];

export default program => {
  const { server, npm, temp, test } = program;
  if (server) {
    console.log('server');
  }
  if (npm) {
    console.log('npm');
  }
  if (temp) {
    console.log('temp');
  }
  if (test) {
    console.log('test');
  }
};
