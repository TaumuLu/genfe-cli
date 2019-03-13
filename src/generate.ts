import { execSync } from 'child_process';
import { Command } from 'commander';
// import { CONFIG_MANIFEST } from './lib/constants';

export default class Generate {
  program: Command;
  manifestList: any[];

  constructor(program) {
    this.program = program;
  }

  parse(): Generate {
    const { program } = this;
    program.parse(process.argv);

    if (!process.argv.slice(2).length) {
      program.help();
    }
    return this;
  }

  run() {
    // const { server, npm, babel, custom, typescript, all } = this.program;
    // if (custom) {
    //   // custon
    // } else {
    //   if (all) {
    //   }
    //   if (typescript) {
    //   }
    //   if (babel) {
    //   }
    //   if (server) {
    //   }
    //   if (npm) {
    //   }
    // }
  }

  react() {}

  reactNative() {}

  install(packages) {
    try {
      execSync(`npm i ${packages.join(' ')}`);
    } catch (error) {}
  }

  mergeFile(currentPath, mergePath) {
    try {
      execSync(`git merge-file ${currentPath} /dev/null ${mergePath}`);
    } catch (error) {}
  }
}
