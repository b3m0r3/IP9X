'use strict';

const generateKey = (length, possible) => {
  // Generate string of random characters
  // Use Math.random() and Math.floor()
  // See documentation at MDN
    let result = '';
    for ( var i = 0; i < length; i++ ) {
        result += possible.charAt( Math.floor(Math.random() * possible.length) );
    }
   return result;
};
const characters = 'ABCDE';
console.dir(generateKey(5,characters))
module.exports = { generateKey };