(function() {
    console.log('Imediately invoked function expression')
})();

(function() {
    var a = 1;
    b = 2;
})();

console.log(b)
// console.log(a) -> error

const g = (function() {
    var a = 1;
    return function() {
        return a;
    }
})();

console.log(g())

(() => console.log('arrow function test'))();