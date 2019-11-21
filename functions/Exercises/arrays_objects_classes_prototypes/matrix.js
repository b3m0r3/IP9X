'use strict';

const matrix = [
    [1, 3, 5, 7 ],
    [2, 4, 6, 8 ],
    [11,13,15,17],
    [19,29,39,49],
];
const max = (a, b) => (a > b ? a : b);

const res = matrix
    .map(row => row.reduce(max)) // [1, 3, 5, 7 ]
    .reduce((acc, rowMax) => acc + rowMax);
console.dir(res);
console.log('FOR');
for (const i in matrix) {
    const row = matrix[i];
    for (const j in row) {
        const col = row[j];
        console.log(i,j,col)
    }
}
console.log('FOR EACH');
matrix.forEach((row, i) => {
    row.forEach((col, j) => {
        console.log(i, j, col);
    });
});

console.log('FOR IN');
for (const i in matrix){
    const row = matrix[i];
    for (const j in row) {
        const col = row[j];
        console.log(i, j, col);
    }
}

