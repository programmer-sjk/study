interface INameable {
    name: string
}

function getName(o: INameable) {
    return o.name // 여기서 Erorr가 발생.
}

let n = getName(undefined) // undefined는 최하위 타입으로 에러가 발생 X
console.log(n)