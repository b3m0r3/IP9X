'use strict';

const welcome = person => {
    console.log(`Ave, ${person.name}!`);
};

const persons = [
    { name: 'Marcus Au'},
    { name: 'Mao Ze'},
    { name: 'Decartes'},
];

for (const person of persons) welcome(person);


