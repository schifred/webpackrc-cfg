import { Mod } from '../Mod';

export default class XmlLoader extends Mod {
  mod = 'xml-loader';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};