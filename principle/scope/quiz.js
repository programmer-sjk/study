/* quiz about javascript hoisting */

// 1.
sayHello();
function sayHello() {
    const data = 'say hello'
    console.log(data)
}

// 2.
sayHello2()
var sayHello2 = function() {
    console.log('say Hello')
} 


// 3.
console.log(Var)
var Var = 3;

// 4.
console.log(noVar)
noVar = 3;

// 5.
var double = 22;

function double(num) {
  return num * 2;
}

console.log(typeof double);

// 6.

var double2;

function double2(num) {
  return num * 2;
}

console.log(typeof double2); 

// 7.
function f() {
    a = 100;
    var b = 200;
}

f()

console.log(a)
console.log(b)