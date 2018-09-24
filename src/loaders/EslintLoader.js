import eslintFormatter from 'react-dev-utils/eslintFormatter';
import Mod from '../Mod';

export default class EslintLoader extends Mod {
  _mod = 'eslint-loader';
  _options = { 
    fix: false,// 自动修改源码中的语法错误
    formatter: eslintFormatter,// 转换校验结果
    eslintPath: require.resolve('eslint')// eslint 实例路径，指向 eslint 模块
  };
};