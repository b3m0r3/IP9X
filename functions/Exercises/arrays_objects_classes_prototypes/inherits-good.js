'use strict';

class Rect {
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    toString() {
        return `[${this.x}, ${this.y}, ${this.w}, ${this.h}]`;
    }
};

class Square extends Rect {
    constructor(x, y, side) {
        super(x, y, side, side);
    }
}

const rectangle1 = new Rect(10,20,30,40);
console.log(rectangle1+' rectangle');

const square1 = new Square(10,20,33);
console.log(square1+' square');