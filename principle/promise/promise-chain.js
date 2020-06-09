const delay = ms => new Promise(
    resolve => setTimeout(() => resolve(ms), ms)
)

// example 3, promise chain은 비 동기 chain 용도!!
delay(1)
    .then(ms => {
        console.log('1st then ms:' + ms)
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(2000), 2000)
        })
    })
    .then(ms => {
        console.log('2st then ms:' + ms)
        return delay(1000)
    })
    .then(ms => {
        console.log('3st then ms:' + ms) 
        return Promise.resolve(1)
            .then(() => Promise.resolve(4000))
    })
    .then(ms => {
        console.log('4st then ms:' + ms)
    })

// example 2, promise chain에서 catch 
/*
    - catch 후에 다음 then이 실행되며 catch 리턴값이 있을 경우 그 값이 전달됨
    - finally에는 값이 전달되지 않는다.
*/
/*
delay(1)
    .then(ms => {
        console.log('1st then ms:' + ms)
        return ms * 2;
    })
    .then(ms => {
        console.log('2st then ms:' + ms)
        throw new Error('first err')
        return ms * 2;
    })
    .catch(e => {
        console.log('first catch: ' + e)
        return 20;  // catch에서 return 하면 다음 then에게 전달됨.
    })
    .then(ms => {
        console.log('3st then ms:' + ms) 
        return 1;
    })
    .then(ms => {
        console.log('4st then ms:' + ms)
        throw new Error('second err')
        return ms * 10;
    })
    .catch(e => console.log('second catch: ' + e))
    .catch(e => console.log('third catch: ' + e))
    .then(ms => {
        console.log('5st then ms:' + ms)
        return 1;
    })
    .finally(ms => {
        console.log('fnally ' + ms) // finally에는 직전 then의 return 값이 전달되지 않음.
    })
*/
// example 1, then에서 return 하지 않을 경우 undefined 전달
/*
delay(1)
    .then(ms => {
        console.log('1st then ms:' + ms)
        return ms * 2;
    })
    .then(ms => {
        console.log('2st then ms:' + ms)
    })
    .then(ms => {
        console.log('3st then ms:' + ms) // undefined
        return 1;
    })
    .then(ms => {
        console.log('4st then ms:' + ms)
    })
*/