'use strict';

const add = x => y => w => {
  const z = x + y + w;
  console.log(x + ' + ' + y + ' + ' + w + ' = ' + z );
  return z;
};

const add2 = x => y => w => x + y + w;
// const add = x => y => x + y;

// Usage

const res = add(1)(3)(5);
const res2 = add2(1)(3)(5)
console.log(res);
console.log(res2);