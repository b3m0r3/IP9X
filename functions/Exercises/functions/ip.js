'use strict';

const ipToInt = (ip = '10.0.0.1') => {
  // Parse ip address as string, for example '10.0.0.1'
  // to ['10', '0', '0', '1'] to [10, 0, 0, 1]
  // and convert to Number value 167772161 with sitwise shift
  // (10 << 8 << 8 << 8) + (0 << 8 << 8) + (0 << 8) + 1 === 167772161
  // Use Array.prototype.reduce of for loop
    const reducer = (result, num) => (result << 8) + parseInt(num);
    return ip.split('.').reduce(reducer, 0)
};

console.dir(ipToInt('127.141.12.44'));