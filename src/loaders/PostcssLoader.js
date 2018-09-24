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

  async install(){
    await Mod.install('postcss-loader');
    await Mod.install('autoprefixer');
  }
};