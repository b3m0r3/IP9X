'use strict'

let names = ["name1","name2","name3","name4","name5",], humans = [];

function Human(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
};

const random = (n1,n2) => Math.round(Math.random()*(n2-n1)+n1);

for (let i = 0; i < 10; i++) {
    humans[i] = new Human(
        names[random(0,names.length-1)],
        random(18,60),
        random(140,220),
        );
}

const arrsort = (property) => {
    return function (hum1, hum2) {
        return hum2[property] - hum1[property];
    }
}

function compareNumbers(a, b) {
    return a - b;
  }


console.dir(humans.sort(arrsort("height")));

