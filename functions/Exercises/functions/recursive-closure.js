'use strict'

const add = x => y => {
    const z = x + y;
    console.log(x + ' + ' + y + ' = ' + z );
    return add(z);
};

const addsimple = x => y => add(x + y);

const result = add(1)(2)(3)(4)(5);
console.log(result);