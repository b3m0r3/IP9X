'use strict'

const person = {
    name: 'name1',
    city: 'roma',
    born: 121,
};

const s = JSON.stringify(person);
console.log(s);

const obj = JSON.parse(s);
console.dir(obj);

const letters = ['a', 'b', 'c', 'd']
console.log(letters +'');
const stringified = JSON.stringify(letters);
console.dir(stringified);
console.dir(JSON.parse(stringified));
console.dir(letters);