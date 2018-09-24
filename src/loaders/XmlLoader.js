import { Mod } from '../Mod';

export default class XmlLoader extends Mod {
  mod = 'xml-loader';

  async install(){
    await Mod.install('xml-loader');
  }
};