const FxJS = require("fxjs");
const _ = require("fxjs/Strict");
//const L = require("fxjs/Lazy");
const C = require("fxjs/Concurrency");
const { reduce, filterL, mapC, go, log, map } = FxJS;
{
    const range = len => {
        let i = -1;
        let res = [];
        while(++i < len) {
            res.push(i)
        }
        return res;
    };
    
    const list = range(5)
    const add = (a, b) => a + b;
    log(list)
    log(reduce(add, list))
}


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