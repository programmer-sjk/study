var p = new Promise((resolve, reject) => {});
var p2 = new Promise((resolve, reject) => resolve(1))
var p3 = new Promise((resolve, reject) => reject(1))

console.log(p)
console.log(p2)
console.log(p3)

var then = p2.then(v => v );
var catchVal = then.catch(e => console.log(e));

console.log(then);
console.log(catchVal)

then.then(v => console.log('then then : ' + v))

var p4 = () => new Promise((resolve, reject) => resolve(1));
console.log(p4)
