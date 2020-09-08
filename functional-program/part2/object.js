const FxJS = require("fxjs");
const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");

const obj1 = {
    a: 1,
    b: 2,
    c: 3
}

_.go(
    obj1,
    Object.values,
    _.map(a => a + 10),
    console.log
)