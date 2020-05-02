(() => console.log('IIFE with arrow'))();

(() => {
    console.log('IIFE with arrow')
})();


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

(function named(count) {
    for(let i=0; i<count; i++)
        console.log("I am named IIFE");
})(3);

;(function() {
    console.log('semi')
})();

wrongFunc = function(){

}; // 세미콜론이 없음
(function() {
    console.log('semi')
})();

(function init() {
    var operate = 'init';
    console.log(operate)
})()

const uniqueId = (function() {
    let count = 0;
    return {
        increment() {
          ++count;
        },
    
        get value() {
          return count;
        }
      };
  })();
  
  console.log(uniqueId()); // 1
  console.log(uniqueId()); // 2


  window.$ = function libraryA() {
    
  };
  
  (function($) {
    
  })(jQuery);