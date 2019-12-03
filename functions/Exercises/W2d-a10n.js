function abbreviate(string) {
    // [a...z] {matches between 4 and unlimited}/globaly,ignores case
    let word = /[a-z]{4,}/gi; 
    function changer(word) { return word[0] + (word.length - 2) + word.slice(-1); }
    return string.replace(word, changer);
}

console.dir(abbreviate('You nWWeed, WWwant, to code-wars mission'));
