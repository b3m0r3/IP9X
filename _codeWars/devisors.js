'use strict';
//returns an array with all of the integer's divisors
//(except for 1 and the number itself), from smallest to largest.
//If the number is prime return the string '(integer) is prime'
function divisors(integer) {
    let array = [];
    for (let i=2; i < integer; i++) {
      (integer % i === 0) ? array.push(i) : '';
    }
    return (array[0]) ? array : `${integer} is prime`
  };

  console.dir(divisors(2000));

function divisorsT1(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
  };

  console.dir(divisors(2000));