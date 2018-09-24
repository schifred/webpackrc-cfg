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
};