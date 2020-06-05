exports.timeOut = (cb) => {
    setTimeout(() => cb && cb(1), 100)
}

exports.timeOutPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 100)  
    })
}

const axios = require('axios');
exports.axios = (cb) => {
    axios.get('https://reqres.in/api/products/3')   
    .then(r => cb && cb(r.data))
    .catch(e => cb(e))
}

exports.axios2 = () => {
    return axios.get('https://reqres.in/api/products/3')   
        .then(r => r.data)
        .catch(e => cb(e))
}
