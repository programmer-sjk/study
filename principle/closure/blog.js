// Simple Closure Ex
var x = 1;

function outer(z) {
    var y = 2;
    return function inner() {
        console.log(x + y + z)
    }
}

var sum = outer(3);
sum();

// Closure private 
var count = (function () {
    var _count = 0;
    function changeVal(val) {
        _count += val;
    } 
    
    return {
        get : function () {
            return _count;
        },
        inc: function(val) {
            changeVal(1);
        },
        dec: function(val) {
            changeVal(-1);
        }
    }
})();

count.inc()
count.inc()
count.inc()
console.log(count.get()); // 3

// Scope Chain Ex
var x = 1;

function outer(z) {
    var y = 2;
    return function middle(p) { 
        var m = 4;
        return function inner() {
            console.log(x + y + z + m + p) 
        }
    }
}

var middle = outer(3);
var inner = middle(5);
console.dir(inner)

// Scope Chain Ex 2
var x = 1;

function outer(z) {
    var y = 2;
    return function middle(p) { 
        var m = 4;
        return function inner() {
            console.log(x + y + z) // inner에서 middle 함수의 변수와 인자를 사용 x
        }
    }
}

var middle = outer(3);
var inner = middle(5);
console.dir(inner)