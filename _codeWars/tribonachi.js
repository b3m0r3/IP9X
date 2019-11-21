'use strict';
//https://www.codewars.com/kata/tribonacci-sequence/train/javascript
function tribonacci(signature, n){
    if (n <= signature.length) { return signature.slice(0,n) }
    for (let i = 2; i<=n-2; i++) {
        signature.push(signature[i] + signature[i-1] + signature[i-2]);
    }
    return signature;
}

console.log(tribonacci([1,1,1],1)); //[1]