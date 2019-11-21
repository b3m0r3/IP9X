'use strict';

const hash = () => {
    const data ={};
    let counter = 0;
    return (key, value) => {
        data[key] = value;
        counter++;
        console.dir({counter});
        return data;
    };
};

const h1 = hash();
h1('name', 'Marcuss');
h1('city','Roma');
const obj = h1('name', 'Marcu22sss');
console.dir(obj);
