(function() {
    console.log("I am IIFE");
}());

// Variation 1
(function() {
    console.log("I am IIFE");
})();

!function() {
    console.log("I am IIFE");
}();

+function() {
    console.log("I am IIFE");
}();

-function() {
    console.log("I am IIFE");
}();

~function() {
    console.log("I am IIFE");
}();

void function() {
    console.log("I am IIFE");
}();

var a = ~function() {
    console.log("I am IIFE");
}();

var b = (function() {
    return 3
})();

console.log(a);
console.log(b);

(function(count) {
    for(let i=0; i<count; i++)
        console.log("I am IIFE");
})(3);

;(function() {
    console.log('semi')
})();

wrongFunc = function(){

} // 세미콜론이 없다면 
(function() {
    console.log('semi')
})();