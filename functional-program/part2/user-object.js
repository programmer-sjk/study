const _ = require("fxjs/Strict");

let m = new Map();
m.set('a', 1)
m.set('b', 2)
m.set('c', 3)

console.log(m[Symbol.iterator]())
console.log(m.entries())
console.log(m.keys())
console.log(m.values())

console.log([...m.entries()])
console.log([...m.keys()])
console.log([...m.values()])

console.log(m)

_.go(
    m,
    _.filter(([k, v]) => v % 2),
    entries => new Map(entries),
    console.log
)