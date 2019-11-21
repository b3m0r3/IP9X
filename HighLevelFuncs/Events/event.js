'use strict';

const adder = initial => {
    let value = initial;
    const add = delta => {
        value += delta;
        console.log('current value ' + value);
        if (value >= add.maxValue) add.maxEvent(value);
        return add;
    };
    add.max = (max, event) => {
        add.maxValue = max;
        add.maxEvent = event;
        return add;
    };
    return add;
};

const maxReached = value => {
    console.log('max reached, value = ' + value);
};

const a1 = adder(1).max(100, maxReached);
a1(25);
a1(80);
a1(-200);
a1(300);



