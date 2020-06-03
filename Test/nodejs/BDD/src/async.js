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

const axios = require('axios');
exports.fun_axios = (cb) => {
    axios.get('https://reqres.in/api/products/3')   
    .then(r => cb && cb(r.data))
    .catch(e => cb(e))
}

exports.fun_axios2 = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://reqres.in/api/products/3')   
        .then( r => resolve(r.data))
        .catch(e => reject(e))
    })
}