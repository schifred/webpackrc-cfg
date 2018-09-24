import { Mod } from '../Mod';

export default class PostcssLoader extends Mod {
  mod = 'postcss-loader';

  constructor(opts = {}){
    super(opts);
    this.opts = {
      plugins: [
        require('autoprefixer')()
      ],
      ...opts
    }
  }

  get dependencies(){
    return [this.mod, 'autoprefixer'];
  }
};