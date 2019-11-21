'use strict'
const findSMF = str => str.match(/[aeoiuy]/gi) ? str.match(/[aeoiuy]/gi).length : 0;
console.log(findSMF('sooope'));