var base = 'hello '
var sayHello = (name) =>  {
    const  text  = base + name;
    return function() {
        console.log(text)
    }
}

var hello1 = sayHello('정국');
var hello2 = sayHello('정국2');
var hello3 = sayHello('정국3');

hello1()
hello2()
hello3()

console.log('==========')

let a = 1;
const function1 = function() {
  console.log(a);
  a = 2
}
//a = 3;
const function2 = function() {
  console.log(a);
}
function1();
//function2();