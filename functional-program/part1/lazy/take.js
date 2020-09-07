const FxJS = require("fxjs");
const _ = require("fxjs/Strict");
//const L = require("fxjs/Lazy");
const C = require("fxjs/Concurrency");
const { reduce, filterL, mapC, go, log, map } = FxJS;

const range = len => {
    let i = -1;
    let res = [];
    while(++i < len) {
        res.push(i)
    }
    return res;
};

const L = {}
L.range = function *(l) {
    let i = -1;
    
    while(++i < l) {
        yield i;
    }
    
}

const take = (l, iter) => {
    let res = [];
    for(const i of iter) {
        res.push(i)
        if(res.length == l) return res;
    }
    return res;
}
console.time('range')
log(take(5, range(100)))
console.timeEnd('range')
console.time('L.range')
log(take(5, L.range(100)))
console.timeEnd('L.range')

console.time('go range')
go(
    range(10000),
    take(5),
    reduce(add),
    log
)
console.timeEnd('go range')

console.time('go L.range')
go(
    L.range(10000),
    take(5),
    reduce(add),
    log
)
console.timeEnd('go L.range')