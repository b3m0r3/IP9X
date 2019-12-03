'use strict';

const data = [
    ['Алиса'    , 'Ж', '2001-11-12', 'Сиамская'],
    ['Пушок'    , 'М', '1994-05-13', 'Сиамская'],
    ['Себастьян', 'М', '1333-11-14', 'Британец'],
    ['Комочек'  , 'М', '2002-11-15', 'Дворняга'],
    ['Выхлоп'   , 'М', '2010-11-16', 'Дворняга'],
    ['Душка'    , 'Ж', '1918-11-17', 'Британец'],
];

class Cat {
    get name() {
        return this[0];
    }
    get sex() {
        return this[1];
    }
    get birth() {
        return this[2];
    }
    get breed() {
        return this[3];
    }  
    get age() {
        const difference = new Date() - new Date(this.birth);
        return Math.floor(difference / 31536000000);
    }
    toString() {
        return this.name + ', пол: ' + this.sex + ', возраст:' + this.age + ', порода: ' + this.breed;
    }
}

const query = cat => (
    cat.age > 100
);

const query2 = cat => (
    cat.breed !== 'Дворняга'
);

console.dir(data);

data.forEach(cat => {
    Object.setPrototypeOf(cat, Cat.prototype);
});

const res = data.filter(query2).filter(query);
res.forEach(element => {
    console.log(element+'');
});


