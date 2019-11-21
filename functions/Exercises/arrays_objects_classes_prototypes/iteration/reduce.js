'use strict';

// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

const sumReduce = (...args) => args.reduce( (a, b) => (a + b), 0);
console.log('sumReduce= ' +sumReduce(1,4,5,7));

const sumFor = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) sum += args[i];
    return sum
}
console.log('sumFor= ' + sumFor(1,4,5,7));

const sumForOf = (...args) => {
    let sum = 0;
    for (const arg of args) sum += arg;
    return sum
}
console.log('sumForOf= ' + sumForOf(1,4,5,7));

const sumWhile = (...args) => {
    let sum = 0;
    while (args.length > 0) sum += args.pop(); //Метод pop удаляет последний элемент из массива и возвращает удалённое значение.
    return sum
}
console.log('sumWhile= ' + sumWhile(1,4,5,7));

const sumDoWhile = (...args) => {
    if (args.length === 0) return 0;
    let sum = 0;
    do {sum += args.pop();  //Метод pop удаляет последний элемент из массива и возвращает удалённое значение.
    } while (args.length > 0)
    return sum;
}
console.log('sumDoWhile= ' + sumWhile(1,4,5,7));

const matrixMax = matrix => {
    let m = matrix[0][0];
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            const cell = row[j];
            if (m < cell) m = cell;
        }
    }
    return m;
};
const matrix = [[1, 2, 3,6], [4, 5,,15,262,3, 6, 515], [7, 8, 9]];
console.log('matrixMax= ' + matrixMax(matrix));


const matrixMax2 = matrix => {
    let m = matrix[0][0];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (m < matrix[i][j]) m = matrix[i][j];
        }
    }
    return m;
};
console.log('matrixMax2= ' + matrixMax2(matrix));
