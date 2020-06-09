var p = new Promise((resolve, reject) => {});
var p2 = new Promise((resolve, reject) => resolve(1))
var p3 = new Promise((resolve, reject) => reject(1))

console.log(p) // Promise { <pending> }
console.log(p2)// Promise { 1 }
console.log(p3)// Promise { <rejected> 1 }


///// then, catch가 Promise를 반환하는 것을 확인 /////////
var then = p2.then(v => v );
var catchVal = then.catch(e => console.log(e));

console.log(then);   // Promise { <pending> }
console.log(catchVal)// Promise { <pending> }
then.then(r => console.log(r)) // 1


var then2 = p2.then(v => {
    return Promise.resolve(1);
})
console.log(then2) // Promise { <pending> }

var then3 = p2.then(v => {
    return new Promise((resolve, reject) => {
        resolve(1);
    })
})

console.log(then3) // Promise { <pending> }