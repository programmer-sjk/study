const FxJS = require("fxjs");
const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");
const C = require("fxjs/Concurrency");

// fxjs의 default export module 객체는 Lazy, Concurrency를 포함한 모든 함수를 가지고 있습니다.
const { reduce, filterL, mapC, go, log, map } = FxJS;
const products = [
    {name: "반팔티", price: 15000, quantity: 1},
    {name: "긴팔티", price: 20000, quantity: 2},
    {name: "핸드폰케이스", price: 30000, quantity: 3},
    {name: "후드짚업", price: 40000, quantity: 4},
]

go(
    products,
    map(p => p.price),
    reduce((a, b) => a + b),
    log
)

go(
    products,
    map(p => p.quantity),
    reduce((a, b) => a + b),
    log
)