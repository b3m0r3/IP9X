'use strict';

const hash = () => {
    const data = {};
    Object.defineProperty(data, 'add', {
        enumarable: false,
        value(key, value) {
            data[key] = value;
            return data;
        }
    });
    return data;
};

console.dir(
    hash().add('name', 'marcus').add('city', 'Roma').add('born', 122)
);
console.dir(
    hash().add('name', 'add').add('city', 'ed').add('born', 124)
);
console.dir(
    hash()
);