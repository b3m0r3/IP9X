'use strict';

const data = [
    ['Алиса', 'place1', '111-11-12'],
    ['person2', 'place2', '222-11-13'],
    ['person3', 'v3', '333-11-14'],
    ['person4', 'place1', '444-11-15'],
    ['person5', 'placee5', '555-11-16'],
    ['person6', 'place6', '666-11-17']
];

class Person {
    get name() {
        return this[0];
    }
    get birth() {
        return this[2];
    }
    get city() {
        return this[1];
    }
    get age() {
        const difference = new Date() - new Date(this.birth);
        return Math.floor(difference / 31536000000);
    }
    toString() {
        return this.name + ' age is ' + this.age;
    }
}

const query = person => (
    person.name === 'Ф'
);

console.dir(data);

data.forEach(person => {
    Object.setPrototypeOf(person, Person.prototype);
});

const res = data.filter(query);
console.dir(res+'');