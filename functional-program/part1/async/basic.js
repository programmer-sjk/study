function add10(a, cb) {
    setTimeout(() => cb(a + 10), 100)
}

add10(5, res => {
    console.log(res)
})

function add20(a) {
    return new Promise(resolve => setTimeout(() => resolve(a + 20), 100))
}

add20(5)
    .then(add20)
    .then(add20)
    .then(r => console.log(r))