'use strict';

const compose = (...fns) => (...args) => (
    fns.reduce( (args, fn) => [fn(...args)],  args)
);

const upperFirst = word => word.charAt(0).toUpperCase() + word.slice(1);
const upperCaptial = s => s.split(' ').map(upperFirst).join(' ');
const lower = s => s.toLowerCase();
const trim = s => s.trim();
const more = s => s.split('');
const capitalize = compose(trim, lower, upperCaptial, more);

const s = '   aBC    _ fFf2 d4  ';
console.dir(s);
console.dir(`lower('${s}') = '${lower(s)}'`);
console.dir(`upperCaptial('${s}') = '${upperCaptial(s)}'`);
console.log(`capitalize('${s}') = '${capitalize(s)}'`);