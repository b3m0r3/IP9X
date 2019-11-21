'use strict'

const arr =[1,3,5,2,4]
    .filter(x => x > 3)
    .map( x => ++x)
    .reduce((acc,val) => acc + val);

console.log(arr)