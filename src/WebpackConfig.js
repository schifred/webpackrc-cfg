import path from 'path';
import globby from 'globby';
import loaders from './loaders';
import plugins from './plugins';

function isObject(obj){
  return Object.prototype.toString.call(obj) === '[object Object]' && obj !== null;
}

export default class WebpackConfig {
  static loaders = loaders;
  static plugins = plugins;

  options = {};

  // 设置模式，https://www.webpackjs.com/concepts/mode/
  get mode(){
    return this.options.mode;
  };
  set mode(mode){
    this.options.mode = mode === 'development' ? 'development' : 'production';
  };
  
  // 查询模块、加载器的资源位，https://www.webpackjs.com/configuration/entry-context/
  get context(){
    return this.options.context;
  };
  set context(context){
    this.options.context = context;
  };
  
  // 入口文件，https://www.webpackjs.com/configuration/entry-context/
  get entry(){
    return this.options.entry;
  };
  set entry(entry){
    this.options.entry = {};
    if ( isObject(entry) ) {
      Object.keys(entry).map(nameExpr => {
        const fileExpr = entry[nameExpr];
        let files = globby.sync(fileExpr);
        files.forEach(file => {
          let paths = file.split('/').reverse()
            .map(item => (path.basename(item).split('.')[0]));
          let name = nameExpr.replace(/\((\d+)\)/g, (str, index) => {
            return paths[index];
          });
          this.options.entry[name] = file;
        });
      });
    } else {
      let files = globby.sync(entry);
      files.map(file => {
        let name = path.basename(file).split('.')[0];
        this.options.entry[name] = file;
      });
    };
  };

  // 输出，https://www.webpackjs.com/configuration/output/
  get output(){
    return this.options.output;
  };
  set output(output = {}){
    if ( this.mode ){
      let { publicPath } = output;
      output.publicPath = this.mode !== 'development' ? publicPath : '/';
    };
    if ( output.path ){
      output.path = path.resolve(this.context, output.path);
    };

    this.options.output = output;
  };

  // 模块，https://www.webpackjs.com/configuration/module/
  get module(){
    return this.options.module;
  };
  set module(module){
    this.options.module = module;
  };

  // 加载器规则，https://www.webpackjs.com/configuration/module/#module-rules
  get rules(){
    return this.options.module ? this.options.module.rules : undefined;
  };
  set rules(rules){
    if ( !this.options.module ) this.options.module = {};
    this.options.module.rules = rules;
  };

  // 解析，https://www.webpackjs.com/configuration/resolve/
  get resolve(){
    return this.options.resolve;
  };
  set resolve(resolve){
    this.options.resolve = resolve;
  };

  // 插件，https://www.webpackjs.com/configuration/plugins/
  get plugins(){
    return this.options.plugins;
  };
  set plugins(plugins){
    this.options.plugins = plugins;
  };

  // 开发服务器，https://www.webpackjs.com/configuration/dev-server/
  get devServer(){
    return this.options.devServer;
  };
  set devServer(devServer){
    this.options.devServer = devServer;
  };

  // source map 生成策略，https://www.webpackjs.com/configuration/devtool/
  get devtool(){
    return this.options.devtool;
  };
  set devtool(devtool){
    this.options.devtool = devtool;
  };

  // 构建目标，https://www.webpackjs.com/configuration/target/
  get target(){
    return this.options.target;
  };
  set target(target){
    this.options.target = target;
  };

  // 监听文件变化，https://www.webpackjs.com/configuration/watch/
  get watch(){
    return this.options.watch;
  };
  set watch(watch){
    this.options.watch = watch;
  };
  get watchOptions(){
    return this.options.watchOptions;
  };
  set watchOptions(watchOptions){
    this.options.watch = true;
    this.options.watchOptions = watchOptions;
  };

  // 外部扩展，https://www.webpackjs.com/configuration/externals/
  get externals(){
    return this.options.externals;
  };
  set externals(externals){
    this.options.externals = externals;
  };

  // 性能，https://www.webpackjs.com/configuration/performance/
  get performance(){
    return this.options.performance;
  };
  set performance(performance){
    this.options.performance = performance;
  };

  // node 扩展，https://www.webpackjs.com/configuration/node/
  get node(){
    return this.options.node;
  };
  set node(node){
    this.options.node = node;
  };

  // 统计信息，https://www.webpackjs.com/configuration/stats/
  get stats(){
    return this.options.stats;
  };
  set stats(stats){
    this.options.stats = stats;
  };

  // 优化
  get optimization(){
    return this.options.optimization;
  };
  set optimization(optimization){
    if ( this.options.mode === 'production' ){
      optimization.minimize = true;
    };
    this.options.optimization = optimization;
  };
};