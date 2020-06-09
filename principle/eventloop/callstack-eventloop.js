
// default example
console.log('first')

setTimeout(function cb() {
    console.log('second')
}, 1000); // 0ms 뒤 실행

console.log('third')

// event loop wait 3 seconds
console.log('first');
setTimeout(
    function cb() { 
        console.log('second'); 
    }
, 0);
wait3Seconds();
console.log('third');

  
function wait3Seconds() {
    let start = Date.now(), now = start;
    while (now - start < 3 * 1000) {
        now = Date.now();
    }
}

// about job queue priority
console.log('fisrt');

setTimeout(function() {
   console.log('setTimeout - second');
}, 0);

var promise = new Promise(function(resolve, reject) {
   resolve();

});
promise.then(function(resolve) {
   console.log('promise - third');
})
.then(function(resolve) {
   console.log('promise - four');
});

console.log('five');