// return new Promise 다양한 style
const e1 = new Promise((resolve, reject) => resolve(1))
const e2 = () => new Promise((resolve, reject) => resolve(1));
const e3 = () => {
    return new Promise((resolve, reject) => {
        resolve(1);
    })
}
const e4 = function() {
    return new Promise((resolve, reject) => {
        resolve(1)
    })
}

// p1은 함수가 아니며 즉시 Proimse객체가 반환된다.
const p1 = new Promise((resolve, reject) => {
    resolve(Math.ceil(Math.random() * 10));
})

console.log(p1) // Promise {1}

// 따라서 아래와 같이 여러번 then을 쓰더라도 동일한 Promise 객체 값 결과가 return 
p1.then(r => console.log(r))
p1.then(r => console.log(r))
p1.then(r => console.log(r))

// p2는 함수
const p2 = () => new Promise((resolve, reject) => {
    resolve(Math.ceil(Math.random() * 10));
})

// 따라서 여러번 then을 쓸 경우 서로 다른 Promise 객체 값 return
p2().then(r => console.log(r))
p2().then(r => console.log(r))
p2().then(r => console.log(r))


