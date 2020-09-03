const reduce = (f, acc, iter) => {
    if(!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value
    }

    for(const i of iter) {
        acc = f(acc, i)
    }
    return acc;
}


const go = (...args) => reduce((a, f) => f(a), args)
go(
    0,
    a => a + 1,
    a => a + 10,
    a => a + 100,
    console.log
)


const pipe = (f, ...fs) => (...a) => go(f(...a), ...fs)
const f = pipe(
    (a, b) => a + b,
    a => a + 10,
    a => a + 100,
)
console.log(f(0, 1))

