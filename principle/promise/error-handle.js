
const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 < 90) {
        resolve(1);
    }
    throw new Error('The promise was rejected by throwing an error');
})
  
myPromise.then(() => {
    throw new Error('this error is occured in then function')
}).catch(e => {
    console.log(e)
})

/* then 내부에서 error 발생시 .then( resovle, reject) 함수로는 핸들링 불가
const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 < 90) {
        resolve(1);
    }
    throw new Error('The promise was rejected by throwing an error');
})
  
myPromise.then(
    () => { 
        throw new Error('this error is occured in then function')
    },
    (error) => console.log(error.message)
);
*/


/* promise 내부에서 reject or throw 되도 handling 가능
const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 < 90) {
        reject(new Error('The promise was rejected by using reject function.'));
    }
    throw new Error('The promise was rejected by throwing an error');
})
  
myPromise.then(
    () => console.log('resolved'), 
    (error) => console.log(error.message)
);
*/