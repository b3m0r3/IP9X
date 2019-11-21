'use strict';
const adder = value =>{
    const add = a => {
        value += a;
        console.log(value);
        if (value >= add.maxValue) {
            setImmediate(() => {
                add.maxEvent(new Error('max value reached'), value);
            });
        }
        return add;
    };

    add.max = (max, event) => {
        add.maxValue = max;
        add.maxEvent = event;
        return add;
    };
    return add;
};

const maxReached = (err, value) => {
    if (err) throw err;
    console.log('value: ' + value);
};


try {
    const a1 = adder(10).max(100, maxReached)(-5);
    a1(25);
    a1(80);
    a1(-200);
    a1(300);
} catch (e) {
    console.log('Never');
}

console.log('end');