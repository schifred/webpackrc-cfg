import { Mod } from '../Mod';

export default class CssExtractLoader extends Mod {
  constructor(opts = {}){
    super(opts);
    this.init();
  };

  get dependencies(){
    return ['mini-css-extract-plugin'];
  };
};