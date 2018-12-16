# webpackrc-cfg

## 安装

```bash
## 全局或本地安装
$ npm i webpackrc-cfg --save

## 获取版本
$ webpackrc-cfg -v
1.1.0
```

## 示例

```Javascript
import { getWebpackConfig } from 'webpackrc-cfg';

const webpackConfig = getWebpackConfig({
  npm: 'cnpm',// 依赖安装命令
  mode: 'production',// 值为 'production' 或 'development'，默认 'production'
  entry: { index: 'src/index.js' },// 入口文件，默认扫描源目录下的 js 文件获得
  output: { path },// 出口
  publicPath: './',// output.publicPath
  resolve: {},// 解析
  alias: { components: 'src/components' },// 别名，默认扫描源目录下的文件夹
  devtool: 'source-map',// 'development' 下默认 'source-map'，'production' 下默认 undefined
  externals: { react: 'React' },// 外部扩展
  target: 'node',// 构建目标
  rules: [{ test: /\.vue$/, loader: 'vue-loader' }],// 额外的加载器
  module: {
    babel: { plugins, presets },// 定义额外 babel 的配置
    ts: {  },// 定义额外 ts 的配置
    css: { modules: false },// 定义额外 css 的配置
  }
}, {
  cwd: 'workspace',// 工作目录，默认 process.cwd()
  paths: {
    src: 'src',// 源目录，默认 'src' 目录
    dist: 'dist',// 目标目录，默认 'dist' 目录
    assets: 'assets',// 静态资源，默认 'assets' 目录
    nodeModules: 'node_modules'// 依赖目录，默认 'node_modules' 目录
  }
});
```
