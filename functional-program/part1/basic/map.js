const products = [
    {name: "반팔티", price: 15000},
    {name: "긴팔티", price: 20000}
]

const map = (f, iter) => {
    let res = [];
    for(const a of iter) {
        res.push(f(a))
    }
    return res;
}

console.log(map(p => p.name, products))
console.log(map(p => p.price, products))

const m = new Map();
m.set('a', 10)
m.set('b', 20)

console.log(map(([k, v]) => [k, v * 2], m))