const FxJS = require("fxjs");
const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");
const C = require("fxjs/Concurrency");
const { reduce, filterL, mapC, go, log, map } = FxJS;


function f3(end) {
    let i = 0;
    while(i < end) {
        console.log(i)
        ++i;
    }
}

f3(10)
console.log('===============================')
function f4(end) {
    _.each(console.log, L.range(1, end, 2))

    _.go(
        L.range(1, end, 2),
        _.each(console.log)
    )
}

f4(10)