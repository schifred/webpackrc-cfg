import { Mod } from '../Mod';

export default class PostcssLoader extends Mod {
  defaultOptions = {
    plugins: [
      require('autoprefixer')()
    ]
  };

  constructor(opts = {}){
    super(opts);
    this.init();
  };

  get dependencies(){
    return [this.mod, 'autoprefixer'];
  };
};