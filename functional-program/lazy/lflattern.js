const FxJS = require("fxjs");
const { reduce, go, log, map, take, filter, curry } = FxJS;

const L = {}
const isIterable = a => a && a[Symbol.iterator];
L.flatten = function *(iter) {
    for(const i of iter) {
        if(isIterable(i)) for(const b of i) yield b;
        else yield i;
    }
}

const it = L.flatten([[1, 2], 3, 4, [5, 6], 7]);
log([...it])
