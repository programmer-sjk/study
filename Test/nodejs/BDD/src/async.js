exports.fun_async = (cb) => {
    setTimeout(() => {
        cb && cb(1)
    }, 100)
}

exports.fun_promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 100)
    })
}
