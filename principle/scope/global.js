// 변수 선언이 없을 경우 global에 해당된다.

function f() {
    a = 100;
    var b = 200;
}

f()

console.log(a)
console.log(b)