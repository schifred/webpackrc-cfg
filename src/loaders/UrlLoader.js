import { Mod } from '../Mod';

export default class UrlLoader extends Mod {
  mod = 'url-loader';

  constructor(opts = {}){
    super(opts);
    this.opts = {
      limit: 8192,
      ...opts
    }
  }

  async install(){
    await Mod.install('url-loader');
  }
};