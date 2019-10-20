'use strict';

const INTERVAL = 500;
let counter = 0;
const MAX_VALUE = 10;
let timer = null;

const event = () => {
    if (counter === MAX_VALUE) {
        console.log('FINISH');
        clearInterval(timer);
        return;
    }
    console.dir({ counter, date: new Date() });
    counter++;
};

console.log('START');
timer = setInterval(event, INTERVAL);