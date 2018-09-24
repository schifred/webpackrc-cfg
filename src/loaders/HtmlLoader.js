import { Mod } from '../Mod';

export default class HtmlLoader extends Mod {
  mod = 'html-loader';

  async install(){
    await Mod.install('html-loader');
  }
};