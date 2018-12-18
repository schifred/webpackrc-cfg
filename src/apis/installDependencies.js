import path from 'path';
import fs from 'fs';
import spawn from 'cross-spawn';
import { getConfig } from './config';
import { name as pluginName, dependencies } from '../../package.json';
import { devDependencies } from '../depend';

/**
 * 获取依赖的版本号
 * @param {string} name 依赖
 * @return {string} 带版本号的依赖名
 */
function getDependencyNameWithVersion(name){
  let version = dependencies[name];
  if ( version ) version = /^\d$/.test(version[0]) ? version : version.slice(1);
  return version ? `${name}@${version}` : name;
};

/**
 * 安装依赖
 * @param {string} name 依赖
 */
export function install(name){
  const npm = getConfig('npm');
  if ( !name ){
    console.info(`Installing dependencies ...`);
    spawn.sync(npm, ['install'], { 
      stdio: 'inherit' 
    });
    console.info('Done');
    return;
  };

  const cwd = getConfig('cwd');
  const modulePath = path.resolve(cwd, `./node_modules/${name}`);

  if ( !fs.existsSync(modulePath) ){
    const save = getConfig('save');
    const nameWithVersion = getDependencyNameWithVersion(name);
    let args = [npm === 'yarn' ? 'add' : 'install', nameWithVersion];
    if ( save ) args.push('--save-dev');

    console.info(`Installing ${name} ...`);
    const output = spawn.sync(npm, args, { 
      stdio: 'inherit' 
    });
    console.info('Done');
  };
}

/**
 * 安装依赖
 */
export async function installDependencies(installMode = 'dependencies'){
  // ctrl + c 退出
  process.on('SIGINT', function () {
    console.log('exit!');
    process.exit();
  });

  if ( !!installMode ) await install();

  if ( installMode === 'devDependencies' ){
    for ( let i = 0; i < devDependencies.length; i++ ){
      const [ moduleName ] = dependencies[devDependencies[i]] ? 
        [devDependencies[i]] : devDependencies[i].split(/\.|\//);
      await install(moduleName);
    };
  } else if ( installMode === 'dependencies' ){
    await install(`${pluginName}`);
  };
};