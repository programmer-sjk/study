/* quiz about javascript hoisting */

// Q1.
sayHello();
function sayHello() {
    const data = 'say hello'
    console.log(data)
}

// Q2.
sayHello2()
var sayHello2 = function() {
    console.log('say Hello')
} 


// Q3.
console.log(Var)
var Var = 3;

// Q4.
console.log(noVar)
noVar = 3;

// Q5.
var double = 22;

function double(num) {
  return num * 2;
}

console.log(typeof double);

// Q6.

var double2;

function double2(num) {
  return num * 2;
}

console.log(typeof double2); 

// Q7.
function f() {
    a = 100;
    var b = 200;
}

f()

console.log(a)
console.log(b)

// Q8.
var value = 30;  
function hoistingExam(){  
    console.log(value); 
    var value = 10; 
    console.log(value); 
}
 

// Q9.
var x = 1;

if (true) {
  var x = 2;

  console.log(x);
}

console.log(x);