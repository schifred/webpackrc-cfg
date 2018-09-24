import { Mod } from '../Mod';

export default class LessLoader extends Mod {
  mod = 'less-loader';

  constructor(opts = {}){
    super(opts);
    this.opts = {
      javascriptEnabled: true,// 不加会报错 Inline JavaScript is not enabled. Is it set in your options?
      lint: false,
      ...opts
    }
  }

  async install(){
    await Mod.install('less-loader');
  }
};