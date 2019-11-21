'use strict';

class Rect {
    toString() {
        return `[${this.x}, ${this.y}, ${this.w}, ${this.h}]`;
    }
}

const p1 = { x:10, y:20, w:33, h:44};
Object.setPrototypeOf(p1, Rect.prototype);
//p1.__proto__ = Rect.prototype;

console.log(p1.toString());