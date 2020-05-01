var result = (function() {
    var name = 'seo'
    return name
})()

console.log(result);

(() => console.log(11) )();


!function() { console.log(12321312)}();

var a = !function() { return 3}();
console.log(a);


(function() {
    console.log('하하하하하하')
}());

// Variation 1
(function() {
    console.log("I am an IIFE!");
}());

// Variation 2
(function() {
    console.log("I am an IIFE, too!");
})();

void function(){ console.log('void')}()