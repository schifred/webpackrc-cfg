import { buildin } from './config';
import { addDependency } from './dependency';

class AbstractMod {
  constructor(opts = {}){
    this.mod = '';
    this.opts = opts;
  }

  get buildin(){
    return buildin;
  }

  addDependency(){
    addDependency(this.dependencies);
  }

  get dependencies(){
    return this.mod;
  }

  async install(){
    const dependencies = Array.isArray(this.dependencies) ? this.dependencies : [this.dependencies];
    for ( let i = 0; i < dependencies.length; i++ ){
    const [ moduleName ] = dependencies[i].split('.');
      await AbstractMod.install(moduleName);
    };
  }
}

export class Mod extends AbstractMod {
  get module(){
    return this.buildin ? require.resolve(this.mod) : this.mod;
  }

  get options(){
    return this.transform ? this.transform(this.opts) : this.opts;
  }
};

export class Plugin extends AbstractMod {
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