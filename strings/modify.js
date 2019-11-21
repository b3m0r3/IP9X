'use strict';

const name = 'ABCD EEEABFGHR R';

console.log();
console.log(`name = ${name}`);

console.log();
console.log(`name.split(' ') = '${JSON.stringify(name.split(' '))}'`);
console.log(`name.replace('r', 'R') = '${name.replace('R', '')}'`);
console.log(`name.replace(/r/g, 'R') = '${name.replace(/R/g, '')}'`);
console.log(`'RRR '.concat(name, '!') = '${'RRR '.concat(name, '!')}'`);