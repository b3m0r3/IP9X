'use strict';

const compose = (f1, f2) => x => f2(f1(x));

const upperFirst = word => word.charAt(0).toUpperCase() + word.slice(1);
const upperCaptial = s => s.split(' ').map(upperFirst).join(' ');
const lower = s => s.toLowerCase();
const capitalize = compose(lower, upperCaptial);

const s = 'aBC    _ fFf2 d4';
console.dir(s);
console.dir(`lower('${s}') = '${lower(s)}'`);
console.dir(`upperCaptial('${s}') = '${upperCaptial(s)}'`);
console.dir(`capitalize('${s}') = '${capitalize(s)}'`);