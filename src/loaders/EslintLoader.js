import { Mod } from '../Mod';

export default class EslintLoader extends Mod { 
  constructor(opts = {}){
    super(opts);
    this.init();
  };

  get dependencies(){
    return [
      this.mod, 
      'eslint', 
      'eslint-config-react-app', 
      'eslint-plugin-flowtype',
      'eslint-plugin-jsx-a11y',
      'eslint-plugin-react',
      'eslint-plugin-import'
    ];
  };
};