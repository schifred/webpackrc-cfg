import Mod from '../Mod';

export default class LessLoader extends Mod {
  _mod = 'less-loader';
  _options = { 
    javascriptEnabled: true,// 不加会报错 Inline JavaScript is not enabled. Is it set in your options?
    lint: false
  };
};