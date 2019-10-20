const COLORS = [
    'black',
    'red',
    'magenta',
    'white',
    'cyan',
];

const colorer = (s, color) => `\x1b[3${color}m${s}\x1b[0m`;

const colorize = name => {
    let res = '';
    const letters = name.split('');
    let color = 1;
    for (const letter of letters) {
        res += colorer(letter, color++);
        if (color > COLORS.length) color = 1;
    }
    return res;
};

const greetings = name => (
    name.includes('Augustus') ?
    `${colorize(name)}!` : `Hello, ${name}!`
);

const fullName = 'Marcus Aurelius Antoninus Augustus';
console.log(greetings(fullName));
const shortName = 'Marcus Aurelius';
console.log(greetings(shortName));