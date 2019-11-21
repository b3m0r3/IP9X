'use strict';

const random = (min, max) => {
    // Generate random Number between from min to max
    // Use Math.random() and Math.floor()
    // See documentation at MDN
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1)) ;
};
console.dir('dsd');
module.exports = { random }; 