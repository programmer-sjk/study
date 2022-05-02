let str: string | number = 'string'
console.log(str)
str = 123
console.log(str)

let n: null = null;
let u: undefined = undefined;

str  = n;
console.log(str)

type str = String;
let s: str = 'abc';
console.log(s)

let listn: 1 | 2 | 3 = 1;
console.log(listn)
listn = 2
console.log(listn)
// listn = 5; error
