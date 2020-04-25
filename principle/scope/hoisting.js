// console.log(notExist) // ReferenceError: notExist is not defined
console.log(typeof notExist) // undefined


// 함수 호이스팅
sayHello();
function sayHello() {
    const data = 'say hello'
    console.log(data)
}

// var hoisting에 의해 undefined 찍힘
console.log(sayHi)
var sayHi = function() {
    console.log('say hi')
}
sayHi();

// var hoisting에 의해 undefined인 sayHello2를 함수처럼 호출했으니 에러!
/*
sayHello2()
var sayHello2 = function() {
    console.log('say Hello')
} 
*/

// var에 의한 호이스팅
console.log(Var)
var Var = 3;

// var가 없으므로 호이스팅 되지 않으며 ReferenceError: noVar is not defined
//console.log(noVar)
//noVar = 3;


// 첫 번째 console.log 결과는 undefined. 함수 내부의 value가 hoisting 됨
var value = 30;  
function hoistingExam(){  
    console.log(value); 
    var value = 10; 
    console.log(value); 
}