/*
    일급
    - 값으로 다룰 수 있다.
    - 변수에 담을 수 있다.
    - 함수의 인자로 사용 될 수 있다.
    - 함수의 결과로 사용 될 수 있다.
*/

const a = 10;
const add10 = a => a + 10;
console.log(add10(a) )

/* 
    일급 함수
    - 함수를 값으로 다룰 수 있다. (변수에 함수를 담을 수 있다.)
    - 함수의 인자로 사용 될 수 있다.
    - 함수의 결과로 사용 될 수 있다.
*/

const f1 = () => 1;
const f2 = f1 => 2;
const f3 = () => () => 1;

console.log(f1())
console.log(f2())
console.log(f3())