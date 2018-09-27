import path from 'path';
import fs from 'fs';
import exec from './utils/exec';
import { hyphen } from './utils/hyphen';
import { npm, buildin, cwd } from './config';
import { projectDependencies } from '../package.json';

let peerDependencies = [];

export function addDependency(dependencies){
  if ( !Array.isArray(dependencies) ){
    dependencies = [dependencies];
  };

  dependencies.map(dependency => {
    if ( peerDependencies.indexOf(dependency) === -1 ){
      peerDependencies.push(dependency);
    };
  });
};

export function removeDependency(dependencies){
  if ( !Array.isArray(dependencies) ){
    dependencies = [dependencies];
  };

  dependencies.map(dependency => {
    peerDependencies = peerDependencies.filter(depend => depend !== dependency);
  });
};

export async function install(name){
  if ( !name ) return;

  const modulePath = path.resolve(cwd, `./node_modules/${name}`);

  if ( !fs.existsSync(modulePath) ){
    console.info(`Installing ${name} ...`);
    const nameWithVersion = getDependencyNameWithVersion(name);
    await exec(`${npm} install ${nameWithVersion}`, {
      save: !!buildin
    });
    console.info('Done');
  };
}

export async function installDependency(){
  console.log(peerDependencies)
  for ( let i = 0; i < peerDependencies.length; i++ ){
    const [ moduleName ] = peerDependencies[i].split(/\.|\//);
    await install(moduleName);
  };
};

export function transformDependencyName(name){
  name = name.replace(/_(?=[\d])/g, () => '-')
    .replace(/_(?=[^\d])/g, () => '');
  return hyphen(name);
};

function getDependencyNameWithVersion(name){
  let version = projectDependencies[name];
  if ( version ) version = /^\d$/.test(version[0]) ? version : version.slice(1);
  return version ? `${name}@${version}` : name;
};