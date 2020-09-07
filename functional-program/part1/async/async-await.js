function delay(time) {
    return new Promise(resolve => setTimeout(() => resolve(), time))
}

async function delayIdentity(a) {
    await delay(1000);
    return a;
}

async function f1() {
    const a = await delayIdentity(10)
    const b = await delayIdentity(5)
    console.log(a, b)
    return a + b
}

f1().then(console.log)

const pa = Promise.resolve(10);


(async () => {
    console.log(await pa)
    console.log('==================')
})()
