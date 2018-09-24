import exec from './utils/exec';
import { npm, buildin } from './config';

class AbstractMod {
  static async install(name){
    const modulePath = path.resolve(process.cwd, `./node_modules/${name}`);

    console.info(`Installing ${name} ...`);
    if ( !fs.existsSync(modulePath) ) 
      await exec(`${npm} install ${name}`, {
        save: !!buildin
      });
    console.info('Done');
  }
  
  constructor(opts = {}){
    this.mod = '';
    this.opts = opts;
  }

  get buildin(){
    return buildin;
  }

  async install(){ }
}

export class Mod extends AbstractMod {
  static install = AbstractMod.install;

  get module(){
    return this.buildin ? require.resolve(this.mod) : this.mod;
  }

  get options(){
    return this.transform ? this.transform(this.opts) : this.opts;
  }
};

export class Plugin extends AbstractMod {
  static install = AbstractMod.install;

  get Constructor(){
    const [ moduleName, ...methodNames ] = this.mod.split('.');
    let Func = require(moduleName);
    let i = 0;

    while ( i < methodNames.length ){
      const methodName = methodNames[i];
      if ( methodName ) Func = Func[methodName];
      i++;
    };

    return Func;
  }

  get plugin(){
    const Func = this.Constructor;
    return new Func(this.opts);
  }
};