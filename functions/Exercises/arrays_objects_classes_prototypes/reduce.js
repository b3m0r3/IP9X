'use strict'

let count = 0;
const arr = [1,3,5,7,9];
const sum = (acc, val) => (count++, console.dir({count, acc, val}), acc + val);
const res = arr.reduce(sum, 0);
console.dir({ res, count});