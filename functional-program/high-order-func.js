// 고차함수 - 함수를 값으로 다루는 함수

// 함수를 인자로 받아 실행하는 case 
const apply1 = f => f(1);
const add2 = a => a + 2;
console.log(apply1(add2))

// 함수 내부에서 함수를 만드는 case

const funcMaker = a => b => a + b;
const add3 = funcMaker(3);
console.log(add3)
console.log(add3(5))
