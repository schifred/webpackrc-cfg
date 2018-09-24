import path from 'path';
import fs from 'fs';
import exec from './utils/exec';
import { npm, buildin, cwd } from './config';

let peerDependencies = [];

export function addDependency(dependencies){
  if ( Array.isArray(dependencies) ){
    peerDependencies = peerDependencies.concat(dependencies);
  } else if ( dependencies ){
    peerDependencies.push(dependencies);
  };
};

export async function install(name){
  if ( !name ) return;

  const modulePath = path.resolve(cwd, `./node_modules/${name}`);

  if ( !fs.existsSync(modulePath) ){
    console.info(`Installing ${name} ...`);
    await exec(`${npm} install ${name}`, {
      save: !!buildin
    });
    console.info('Done');
  };
}

export async function installDependency(){
  for ( let i = 0; i < peerDependencies.length; i++ ){
  const [ moduleName ] = peerDependencies[i].split('.');
    await install(moduleName);
  };
};