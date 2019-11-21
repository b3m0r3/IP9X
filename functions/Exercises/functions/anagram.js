'use strict'

const anagram = (s1, s2) => 
    s1.replace(/[^\w]|_/g, "").toLowerCase().split("").sort().join("") === s2.replace(/[^\w]|_/g, "").toLowerCase().split("").sort().join("");
console.dir(anagram("frvo,,   !,Do","dORf!   __ !o!___v"));