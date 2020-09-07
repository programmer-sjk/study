const FxJS = require("fxjs");
const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");
const C = require("fxjs/Concurrency");
const { reduce, filterL, mapC, go, log, map } = FxJS;

function f1(limit, list) {
    let sum = 0;
    for(const i of list) {
        if(i % 2) {
            const s = i * i;
            sum += s;
            if(--limit == 0) break;
        }
    }
    console.log(sum)
}   

f1(3, [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10])

function f2(limit, list) {
    const add = (a, b) => a + b
    console.log(
        _.reduce(add, 
        L.take(
            limit, 
            L.map(
                a => a * a, 
                L.filter(i => i % 2, list)
            )
        )
    ))

    _.go(
        list,
        L.filter(i => i % 2),
        L.map(a => a * a),
        L.take(limit),
        _.reduce(add),
        console.log
    )
}   

f2(3, [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10])