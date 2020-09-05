//const go1 = (a, f) => f(a)
const go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a)

const add5 = a => a + 5;
const delay100 = a => new Promise(resolve => setTimeout(() => resolve(a), 100))

go1(go1(45, add5), console.log)
go1(go1(delay100(55), add5), console.log)

/*
const r = go1(10, add5);
console.log(r)

const r2 = go1(delay100(100), add5)
r2.then(console.log)
*/