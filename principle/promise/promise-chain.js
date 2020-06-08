const delay = ms => new Promise(
    resolve => setTimeout(resolve(ms), ms)
)

delay(100)
    .then(ms => {
        console.log('1st then' + ms)
        return 2 * ms
    })
    .then(ms => {
        console.log('2st then' + ms)
        return new Promise(resolve => setTimeout(() => resolve(1000), 1000))
    })
    .then(ms => {
        console.log('3st then' + ms)
        throw new Error('err~')
        //return 2 * ms
    })
    .then(ms => {
        console.log('4st then' + ms)
        return 2
    })
    .then(ms => {
        console.log('5st then' + ms)
        return 2 * ms
    })
    .catch(e => {
        console.log(e)
        return e;
    })
    .then(ms => {
        console.log('6st then' + ms)
        return 2 * ms
    })

/*
delay(100)
    .then(ms => {
        console.log('1st then' + ms)
        return 2 * ms
    })

delay(100)
    .then(ms => {
        console.log('1st then' + ms)
        return 2 * ms
    })
*/

/*
new Promise((resolve, reject) => {
    console.log('Initial');
    resolve();
})
.then(() => {
    throw new Error('Something failed');
    console.log('Do this, it will not be executed');
})
.catch(() => {
    console.log('Do that');
})
.then(() => {
    console.log('Do this, whatever happened before');
});
*/


/*
const wait = time => new Promise(
    res => setTimeout(() => res(), time)
  );

  wait(100)
    .then( _ => new Promise(res => res('foo')))
    .then(r => console.log(r))
    .then(() => console.log('last then'))
*/