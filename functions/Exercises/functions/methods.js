'use strict';

const methods = iface => {
  const names = [];
  for (const name in iface) {
    const fn = iface[name];
    if (typeof fn === 'function') {
      names.push([name, fn.length]);
    }
  }
  return names;
};

const smf = [ ['m1', 1], ['m2', 2], ['m3', 3] ];
console.log(methods(smf));