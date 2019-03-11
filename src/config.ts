import { CONFIG_MANIFEST } from './lib/constants';

const assetslist = [];

export default program => {
  const { server, npm } = program;
  if (server) {
    console.log('server');
  }
  if (npm) {
    console.log('npm');
  }
};
