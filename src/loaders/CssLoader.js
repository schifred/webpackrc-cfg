import { Mod } from '../Mod';

export default class CssLoader extends Mod {
  mod = 'css-loader';

  constructor(opts = {}){
    super(opts);
    this.opts = {
      modules: true,
      camelCase: true,
      ...opts
    };
    this.addDependency();
  }
};