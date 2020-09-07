const map = (f, iter) => {
    let res = [];
    for(const i of iter) {
        res.push(f(i))
    }
    return res;
}

const filter = (f, iter) => {
    let res = [];
    for(const i of iter) {
        if(f(i)) res.push(i)
    }
    return res;
}

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

const products = [
    {name: "반팔티", price: 15000},
    {name: "긴팔티", price: 20000},
    {name: "핸드폰케이스", price: 30000},
    {name: "후드짚업", price: 40000},
]
const add = (a,b) => a + b;
console.log(reduce(add, map(p => p.price, filter(p => p.price < 25000, products))))