import { Mod } from '../Mod';

export default class CssLoader extends Mod {
  defaultOptions = {
    modules: true,
    camelCase: true
  };

  constructor(opts = {}){
    super(opts);
    this.init();
  };
};