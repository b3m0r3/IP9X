'use strict';

const s1 = 'start\
end';

const s2 = `start
end`;

console.dir({s1, s2});  
console.log(s1 , s2);

/*
\b: backspace U+0008
\f: form feed U+000C
\n: line feed U+000A
\r: carriage return U+000D
\t: horizontal tab U+0009
\v: vertical tab U+000B
\': single quote U+0027
\": double quote U+0022
\\: backslash U+005C
*/

console.log('\xA9\xAE');
console.log('\u00A9\u00AE');

console.log('\u2665');
console.log('ðŸ ');
console.log('ðŸ’Ÿ', 'ðŸ’Ÿ'.charCodeAt(0), 'ðŸ’Ÿ'.codePointAt(0));

console.log('\'ðŸ’©\'.length: ' + 'ðŸ’©'.length);
console.log('ðŸ’©'[0]);
console.log('ðŸ’©'[1]);
console.log('ðŸ¦ Parrot');
console.log('ðŸ¦ ðŸ˜€ ðŸ¦– ðŸŒœ');