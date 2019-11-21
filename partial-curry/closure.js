'use strict';

const log = (n, base) => Math.log(n) / Math.log(base);

const createLog = base => n => log(n, base);

const lg = createLog(10);
const ln = createLog(Math.E)

console.log('log(n = 5, основание = 10) = ' + log(5, 10))
console.log('lg(5) = ' + lg(5));
console.log('log(n = 5, основание = E) = ' + log(5, Math.E))
console.log('ln(5) = ' + ln(5));