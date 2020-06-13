interface IPerson {
    name: string,
    age: number,
    etc?: string // 선택속성, 있어도 없어도 ok
}

let p1: IPerson = {name: 'seo', age:31, etc: 'study in cafe'}
let p2: IPerson = {name: 'seo', age:31}

console.log(p1, p2)

// 익명 인터페이스
let ai: {
    name: string,
    age: number,
    etc?: string 
} = {name: 'seo', age:31, etc: 'study in cafe'}
console.log(ai)

// 함수에 사용된 익명 인터페이스
function printMe(me: {name: string, age: number, etc?: string}) {
    console.log(me.etc? `${me.name}은 ${me.age}살이고 ${me.etc}` : `${me.name}은 ${me.age}살`)
}
printMe(ai)