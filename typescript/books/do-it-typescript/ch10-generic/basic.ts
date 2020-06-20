interface IValuable<T> {
    value: T
}

function identity<T>(arg: T): T {return arg}

let ns: number | string = 1;
console.log(ns)
ns = 'ac'
console.log(ns)
