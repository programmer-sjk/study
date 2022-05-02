let n: number = 1;
let b: boolean = true;
let s: string = 'hello';
let o: object = {}

console.log(n)
n = 2;
console.log(n)
//n = 'abc'; error


// 타입추론되서 지정됨
let a = 1;
let c = 'str';
let d = false;
let e = {}

let all: any = 1;
console.log(all)
all = 'str';
console.log(all)
all = true
console.log(all)
all ={o: 1}
console.log(all)

let u: undefined = undefined;
console.log(u)
//u = 1; error

console.log(`${u}`)