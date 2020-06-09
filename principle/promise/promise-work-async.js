const myPromise = new Promise((resolve, reject) => resolve(1));
console.log('middle')
myPromise.then(r => console.log(r));
console.log('finish')

// output: middle, finish, 1