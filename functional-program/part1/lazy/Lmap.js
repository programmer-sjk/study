const FxJS = require("fxjs");
const { reduce, go, log, map } = FxJS;

const L = {}
L.map = function *(f, iter) {
    for(const i of iter) yield f(i)
}

const it = L.map(a => a + 10, [1,2,3])
console.log(...it)
//log(it.next())
