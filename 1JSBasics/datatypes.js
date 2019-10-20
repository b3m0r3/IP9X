'use strict';

const integer = 5;
const float = 14.1412;
const string = 'wasd';
const boolean = true;

const objectPerson = {
    name: 'Mao',
    born: 123,
    city: 'Roma',
    position: "goood",
};

objectPerson.city = 'Ddad';

const cities = [ 'ASDd', 'GGGG', 'Blaaa' ];

cities.push('Odesssss');
cities.unshift('GGGG4');

console.log(cities);
console.log(cities.shift());
console.log(cities.pop());

console.log( { integer }, typeof integer);
console.log( { float }, typeof float);
console.log( { string }, typeof string);
console.log( { boolean }, typeof boolean);
