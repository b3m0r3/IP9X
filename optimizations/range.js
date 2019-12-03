'use strict';
const rangeNew = (from, to) => {
    if (to < from) return [];
    const len = to - from + 1;
    const range = new Array(len);
    for (let i = from; i <= to; i++) {
      range[i - from] = i;
    }
    return range;
};
console.log(rangeNew(5,10));