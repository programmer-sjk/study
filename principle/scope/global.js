// 변수 선언이 없을 경우 global에 해당된다.
// 함수 내부의 var, let, const가 없는 변수가 global에 속하려면 함수를 꼭 호출해야 인지가능.

function f() {
    a = 100;
    var b = 200;
}

f()

console.log(a)
console.log(b)