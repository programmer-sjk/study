// Promise.reject, Promise.resolve는 Promise 객체를 반환

const reject = Promise.reject('err')
const resolve = Promise.resolve('success')

console.log(reject) // Promise { <rejected> 'err' }
console.log(resolve)// Promise { 'success' }
reject.catch(e => console.log(e))

const momPromise = new Promise((resolve, reject) => {
    const momSavings = 200000;
    const priceOfPhone = 100000;
    if(momSavings < priceOfPhone) {
        resolve('mom buy phone')
    } else {
        reject('mom cant buy phone')
    }
})

// Promise 객체에 then, catch, finally가 올수 있다. finally는 성공하든 실패하든 실행
momPromise
    .then(r => console.log(r))
    .catch(e => console.log(e))
    .finally(() => console.log('mom buy phone or not, i love her'))

