export let npm = 'npm';
export let buildin = false;

export function config(opts = {}){
  if ( opts.npm !== undefined ) npm = opts.npm;
  if ( opts.buildin !== undefined ) buildin = opts.buildin;
};