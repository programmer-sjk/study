const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
)

const deleys = [
    delay(1000),
    delay(500),
    delay(500)
]

Promise.all(deleys)
    .then(() => console.log('it will be executed after 2s'))
    .catch(e => console.log(e))