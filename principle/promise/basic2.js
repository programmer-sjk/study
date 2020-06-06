

//const p = Promise.reject('err')
//const p = Promise.resolve('success')
//p.then(r => console.log('then: ' + r))
//.catch(e => console.log('error: ' + e))

const momPromise = new Promise((resolve, reject) => {
    const momSavings = 200000;
    const priceOfPhone = 100000;
    if(momSavings >= priceOfPhone) {
        resolve('mom buy phone')
    } else {
        reject('mom cant buy phone')
    }
})

momPromise
.then(r => console.log(r))
.catch(e => console.log(e))
.finally(() => console.log('mom buy phone or not, i love her'))

