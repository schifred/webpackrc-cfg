import exec from './utils/exec';

export default class Plugin {
  static async install(name){
    console.info(`Installing ${name} ...`);
    return await exec(`npm i ${name}`);
  }

  buildin = false;

  constructor(opts = {}){
    const { buildin } = opts;
    this.buildin = buildin;
  }

  get Constructor(){
    const [ moduleName, ...methodNames ] = this._mod.split('.');
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
    return new Func(this._options);
  }
};