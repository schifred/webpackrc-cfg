import { Mod } from '../Mod';

export default class SvgSpriteLoader extends Mod {
  mod = 'svg-sprite-loader';

  constructor(opts = {}){
    super(opts);
    this.opts = {
      symbolId: 'icon-[name]',
      ...opts
    };
    this.addDependency();
  }
};