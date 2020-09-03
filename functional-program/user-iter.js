const iterable = {
    [Symbol.iterator]() {
        let i = 3;
        return {
            next() {
                return i == 0? {done: true} : {value: i--, done: false}
            },
            [Symbol.iterator]() {
                return this;
            }
        }
    }
}

const iterator = iterable[Symbol.iterator]();
for(const i of iterator) {
    console.log(i)
}

// 전개 연산자
const arr = [1,2,3]
//arr[Symbol.iterator] = null;
console.log(...arr)
console.log([...arr, 1, 2])

const a = {
    next() {
        return 1;
    }
}

console.log(a.next())

const b = {
    f: function() {
        return 1;
    },
    f2() {
        return 3;
    }
}

console.log(b.f2())
