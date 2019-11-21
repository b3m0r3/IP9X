'use strict'

console.log('FOR')

for (let a = 1; a < 4; a++) {
    console.dir(a);
}

console.log('WHILE')

let b = 1;
while (b < 4 ) {
    console.log(b++);
}

console.log('DO WHILE');

let c = 1;
do {
    console.log(c++);
} while ( c < 4 );

console.log('FOR IN OBJ');

const hash = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
};

hash.fifth = 5;

for (const key in hash) {
    const value = hash[key];
    console.log(
        key, '\t', typeof key, '\t',
        value, '\t', typeof value
    );
}


console.log('FOR IN ARRAY');

const numbers = [11,12,13,14,15,16];


for (const d in numbers) {
    const value = numbers[d];
    console.log(d, typeof d, value);
}
console.log('FOR OF ARRAY');
for (const y of numbers) {
    const value = numbers[y];
    console.log(y, typeof y, value);
}
console.log('FOR EACH ARRAY');

numbers.forEach((item, i) => {
    console.log(i, item);
});

[1,3,5].forEach(x => {
    console.log(x);
})