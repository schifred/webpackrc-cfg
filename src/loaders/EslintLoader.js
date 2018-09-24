import { Mod } from '../Mod';

export default class EslintLoader extends Mod {
  mod = 'eslint-loader';

  constructor(opts = {}){
    super(opts);
    this.opts = {
      fix: false,// 自动修改源码中的语法错误
      formatter: require('react-dev-utils/eslintFormatter'),// 转换校验结果
      eslintPath: require.resolve('eslint'),// eslint 实例路径，指向 eslint 模块
      ...opts
    };
    this.addDependency();
  }

  get dependencies(){
    return ['eslint', this.mod, 'react-dev-utils'];
  }
};