const FxJS = require("fxjs");
const L = require("fxjs/Lazy");
const { reduce, go, log, map, take, filter, curry } = FxJS;

const users = [
    {age: 20},
    {age: 23},
    {age: 26},
    {age: 30},
    {age: 33},
    {age: 35},
    {age: 42},
]


const find = curry((f, iter) => go(
    iter,
    L.filter(f),
    take(1),
    ([a]) => a
))

log(find(u => u.age > 30, users))


go(
    users,
    L.map(u => u.age),
    find(n => n < 30),
    log
)