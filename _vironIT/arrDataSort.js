'use strict';

let arr = [{date: '10.01.2017'}, {date: '21.13.2002'}, {date: '05.11.2016'}];

arr.forEach(function(item) {
	let arrDate = item.date.split('.'), //split '10.01.2017'
    date = new Date(Number(arrDate[2]), Number(arrDate[1]), Number(arrDate[0]));
    item.time = date.getTime(); // получаем милисикунды от какого-то момента в прошлом
});
console.log(arr);
arr.sort( 
    (a, b) => b.time - a.time 
);
console.log(arr);
var res = arr.map( function (item) { return {date: item.date} });

console.log(res);

var res2 = arr.map( function (item) { delete item.prototype.time });
console.log(res2);