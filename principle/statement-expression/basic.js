function f() {
    return 3;
}

console.log( 3+ f()) //function call return expression.

console.log(1,2,3,4) // 1,2,3,4
console.log((1,2,3,4)) // 4, expression is evaluated left to right

function foo() {
    return 1,2,3,4;
}
console.log(foo()); // 4, expression is evaluated left to right
