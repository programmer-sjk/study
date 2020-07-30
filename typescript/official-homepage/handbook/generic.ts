function identity<T>(arg: T): T {
    return arg;
}

console.log(identity(3))
console.log(identity('abc'))

function identity2<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg;
}
console.log(identity2([1,2,3]))

const myIdentity: <T>(arg: T) => T = identity
console.log(myIdentity(3000))
