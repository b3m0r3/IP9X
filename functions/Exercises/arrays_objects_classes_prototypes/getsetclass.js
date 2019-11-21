'use strict';
class Rect {
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    get area() {
        return this.w * this.h;
    }

    set side(l) {
        this.w = l;
        this.h = l;
    }
    get side() {
        if (this.w !== this.h) console.log("not a square!");
        return this.w;
    }
};

const p1 = new Rect(11, 22, 50, 20);
console.log(p1.area);
console.log(p1.side);
p1.side = 150;
console.log(p1.side);
console.log(p1.area);