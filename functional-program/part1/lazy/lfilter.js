const FxJS = require("fxjs");
const { reduce, go, log, map } = FxJS;

const L = {}

L.filter = function *(f, iter) {
    for(const i of iter) if(f(i)) yield i;
}

const it = L.filter(a => a > 2, [1,2,3,4,5])
log(...it)