'use strict';

function Rect(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.toString = function() {
        return `[${this.x}, ${this.y}, ${this.w}, ${this.h}]`;
    };
};

const p1 = new Rect(10, 20, 50, 50);
console.log(p1.toString());