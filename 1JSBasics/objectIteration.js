'use strict';

const welcome = person => {
    console.log(`Ave, ${person.name}!`);
};

const persons = {
    marcus: { name: 'Marcus Au'},
    mao:    { name: 'Mao Ze'},
    rene:   { name: 'Decartes'},
};

for (const name in persons) {
    const person = persons[name];
    welcome(person);
}

