'use strict';
const victorianSlang = [
    {
    term: 'doing the bear',
    found: true,
    popularity: 108,
},
    {
    term: 'katterzem',
    found: false,
    popularity: null,
},
    {
    term: 'bone shaker',
    found: true,
    popularity: 609,
},
    {
    term: 'smothering a parrot',
    found: false,
    popularity: null,
},
    {
    term: 'damfino',
    found: true,
    popularity: 232,
},
    {
    term: 'rain napper',
    found: false,
    popularity: null,
},
    {
    term: 'donkey’s breakfast',
    found: true,
    popularity: 787,
},
    {
    term: 'rational costume',
    found: true,
    popularity: 513,
},
    {
    term: 'mind the grease',
    found: true,
    popularity: 154,
},

];

console.log(victorianSlang);
console.log(victorianSlang[0].popularity)
let popularitySum = 0;
let itemsFound = 0;
const len = victorianSlang.length;
let item = null;
for (let i = 0; i < len; i++) {
    item = victorianSlang[i];
    if (item.found) {
        popularitySum = item.popularity + popularitySum;
        itemsFound = itemsFound + 1;
    }
}
const averagePopularity = popularitySum / itemsFound;
console.log(averagePopularity);

function averageScores({avg, n}, slangTermInfo) {
    if (!slangTermInfo.found) { return {avg, n}; }
    return {
        avg: (slangTermInfo.popularity + n * avg) / (n + 1),
        n:   n + 1,
    };
}

const initialVals       = { avg: 0, n: 0 };
const averagePopularity2 = victorianSlang.reduce(averageScores, initialVals).avg;
console.log("Average popularity2:", averagePopularity2);