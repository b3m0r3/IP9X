'use strict'
const fizz = n => {
    let i = 0;
    while (i<=n) {
        if (i%3===0 && i%5===0) {console.log('FIZZBUZZ')}
        else if (i%3===0) {console.log('FIZZ')}
        else if (i%5===0) {console.log('BUZZ')}
        else {console.log(i)}
    i++;    
    }
}

fizz(20000);