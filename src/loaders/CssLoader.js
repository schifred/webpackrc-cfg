import Mod from '../Mod';

export default class CssLoader extends Mod {
  _mod = 'css-loader';
  _options = { 
    modules: true,
    camelCase: true
  };

  constructor(opts){
    super(opts);
  }
};