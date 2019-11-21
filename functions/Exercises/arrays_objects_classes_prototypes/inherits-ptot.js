'use strict';

// const util = require('util'); node thing

function Rect(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
};

Rect.prototype.toString = function() {
    return `[${this.x}, ${this.y}, ${this.w}, ${this.h}]`;
};

function Square(x, y, side) {
    Rect.call(this, x, y, side, side)
};

// util.inherits(Square, Rect);

//Square.prototype = Object.create(Rect.prototype);
//Square.prototype.constructor = Square;

//Square.prototype = new Rect();
//Square.prototype.constructor = Square;

Object.setPrototypeOf(Square.prototype, Rect.prototype); //(naslednik, nasleduemiy)

const rectangle1 = new Rect(10,20,30,40);
console.log(rectangle1+' rectangle');

const square1 = new Square(10,20,30);
console.log(square1+' square');