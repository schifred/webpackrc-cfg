import { Mod } from '../Mod';

export default class HtmlLoader extends Mod {
  mod = 'html-loader';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};