const FxJS = require("fxjs");
const _ = require("fxjs/Strict");

const { reduce, filter, log, map } = FxJS;
const go = (...args) => reduce((a, f) => f(a), args)
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const products = [
    {name: "반팔티", price: 15000, quantity: 1},
    {name: "긴팔티", price: 20000, quantity: 2},
    {name: "핸드폰케이스", price: 30000, quantity: 3},
    {name: "후드짚업", price: 40000, quantity: 4},
    {name: "청바지", price: 50000, quantity: 5},
]

const add = (a, b) => a + b;
log(
    reduce(
        add,
        map(p => p.price, 
            filter(p => p.price < 20000, products))
    )
)


go(
    products,
    map(p => p.price),
    filter(price => price < 20000),
    add,
    log
)
console.clear()

const curry = f =>
    (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)
const mult = curry((a, b) => a * b)
console.log(mult(1)(5))