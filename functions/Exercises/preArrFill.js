'use strict';
function prefill(n, v) {
    if ( /\D/.test(n)) {
      throw new TypeError(`${n} is invalid`)
    }
    const arr = []
    arr.length = n
    arr.fill(v)
    return arr
}

  console.log(prefill(14,[1,[2,3]]))