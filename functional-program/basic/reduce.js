const nums = [1, 2, 3, 4, 5]

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

const add = (a, b) => a + b;
console.log(reduce(add, 0, nums))
console.log(reduce(add, nums)) 