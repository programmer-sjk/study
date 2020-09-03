const curry = f => (a, ..._) => _.length? f(a, ..._) : (..._) => f(a, ..._)
const mult = curry((a, b) => a * b)
console.log(mult(3))
console.log(mult(3)(10))
