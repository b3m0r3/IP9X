'use strict'

const person1 = {};
person1.name = 'Name';
person1.job = 'Job';
person1.born = '412';

const person2 = new Object();
person2.name = 'Name2';
person2.job = 'Job2';
person2.born = '41222';

const person3 = {
    name: 'asdad',
    job: 'jooob',
    born: 12222,
};

console.dir({ person1, person2, person3})
