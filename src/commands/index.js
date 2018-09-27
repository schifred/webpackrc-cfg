import path from 'path';
import Command from 'common-bin';
import pkg from '../../package.json';

class MainCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv);

    this.usage = 'Usage: cfg <command> [options]';
    this.add('install', path.join(__dirname, 'install.js'));
    this.yargs.alias('v', 'version');
  }

  get version() {
    return pkg.version || '1.0.0';
  }
}

export default MainCommand;