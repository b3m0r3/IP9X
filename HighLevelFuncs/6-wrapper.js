'use strict';

const logable = fn => (...args) => {
    const res = fn(...args);
    console.log(`Call: ${fn.name}(${args.join(', ')}) Result: ${res}`);
    return res;
};

const sum = (a, b) => (a + b);

const wrapped = logable(sum);
wrapped(1, 5);
wrapped(2, 5);
wrapped(3, 5);