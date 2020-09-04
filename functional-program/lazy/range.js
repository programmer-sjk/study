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

{    
    const list = range(5)
    const add = (a, b) => a + b;
    log(list)
    log(reduce(add, list))
}

// Lazy range
const L = {}
L.range = function *(l) {
    let i = -1;
    
    while(++i < l) {
        yield i;
    }
    
}

const list = L.range(5)
const add = (a, b) => a + b;
log(list)
log(reduce(add, list))

// 두개의 성능 테스트
function test(name, time, f) {
    console.time(name)
    while(time--) f()
    console.timeEnd(name)
}

test('range', 10, () => reduce(add, range(1000000)))
test('L.range', 10, () => reduce(add, L.range(1000000)))