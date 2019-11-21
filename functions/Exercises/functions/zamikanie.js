'use strict'

const hash = (key,value) => {
    const data = {};
    let counter = 0;
    return (key, value) => {
        data[key]=value;
        counter++;
        console.dir({ counter });
        return data;
    };
};

const h1 = hash();
h1('name','Imechko');
h1('city','Gorodok');
const obj1 = h1('born', 121);
console.dir({ obj1 });