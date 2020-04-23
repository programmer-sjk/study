/*
    함수 선언문 hoisting은 변수 선언보다 우선순위가 높다.
    함수 선언문 hoisting은 변수 값 대입보다 우선순위가 낮다.
*/

var double = 22;

function double(num) {
  return (num*2);
}

console.log(typeof double); // Output: number


var double2;

function double2(num) {
  return (num*2);
}

console.log(typeof double2); // Output: function