var x = 1;

function outer(z) {
    var y = 2;
    return function inner() {
        console.log(x + y + z)
    }
}

var sum = outer(3);
sum();


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