const products = [
    {name: "반팔티", price: 15000},
    {name: "긴팔티", price: 20000},
    {name: "후크티", price: 25000}
]

const filter = (f, iter) => {
    let res = [];
    for(const i of iter) {
        if(f(i)) res.push(i)
    }
    return res;
}

console.log(filter(p => p.price < 20000, products))
console.log('==============================')
console.log(filter(p => p.price > 20000, products))

const ret = [1,2,3,4,5].filter(i => i > 1)
console.log(ret)
console.log(filter(i => i > 1, [1,2,3,4,5]))