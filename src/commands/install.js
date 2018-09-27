import path from 'path';
import Command from 'common-bin';
import { installDependency } from '../dependency';

class Install extends Command {
  constructor(rawArgv) {
    super(rawArgv);

    this.options = {
      dependencies: {
        type: 'string',
        default: false,
        alias: "d",
        description: 'dependencies\'s path'
      }
    };
  }

  async run({ cwd, env, argv, rawArgv }) {
    if ( !argv.d ){
      console.warn('dependencies\'s path is required to install loaders and plugins');
      return;
    };
    
    await require(path.resolve(cwd, argv.d));
    await installDependency();
  }

  get description() {
    return 'install loaders and plugins';
  }
};

module.exports = Install;