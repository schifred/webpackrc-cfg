import { buildin } from './config';
import { addDependency, removeDependency, transformDependencyName } from './dependency';

class AbstractMod {
  get buildin(){
    return buildin;
  };

  get dependencies(){
    return this.mod;
  };

  addDependency = addDependency;
  removeDependency = removeDependency;
  transformDependencyName = transformDependencyName;
};

export class Mod extends AbstractMod {
  constructor(opts = {}){
    super(opts);
    this.mod = this.transformDependencyName(this.constructor.name);
    this.opts = opts;
    this.init();
  };
  
  init(){
    this.opts = {
      ...(this.defaultOptions || {}),
      ...(this.opts || {})
    };
    if ( !Object.keys(this.opts).length ){
      this.opts = undefined;
    };
    
    // 依赖管理
    this.removeDependency(this.transformDependencyName(this.constructor.name));
    this.addDependency(this.dependencies);
  }

  get module(){
    return this.buildin ? require.resolve(this.mod) : this.mod;
  };

  get options(){
    return this.transform ? this.transform(this.opts) : this.opts;
  };
};

export class Plugin extends AbstractMod {
  constructor(opts, arg2, arg3, arg4){
    super(opts, arg2, arg3, arg4);
    this.mod = this.transformDependencyName(this.constructor.name);
    this.opts = opts;
    this.arg2 = arg2;
    this.arg3 = arg3;
    this.arg4 = arg4;
    this.init();
  };
  
  init(){
    this.opts = this.defaultOptions ? {
      ...this.defaultOptions,
      ...(this.opts || {})
    } : this.opts;
    
    // 依赖管理
    this.removeDependency(this.transformDependencyName(this.constructor.name));
    this.addDependency(this.dependencies);
  };
  
  get Plugin(){
    const [ moduleName, ...methodNames ] = this.mod.split('.');
    let Func = require(moduleName);
    let i = 0;

    while ( i < methodNames.length ){
      const methodName = methodNames[i];
      if ( methodName ) Func = Func[methodName];
      i++;
    };

    return Func;
  };

  get plugin(){
    const Func = this.Plugin;
    return new Func(this.opts, this.arg2, this.arg3, this.arg4);
  };
};