const FxJS = require("fxjs");
const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");
const C = require("fxjs/Concurrency");
const { reduce, filterL, mapC, go, log, map } = FxJS;

const obj1 = {
    a: 1,
    b: undefined,
    c: 'CC',
    d: 'DD'
}

function query1(obj1) {
    let res = '';
    for(const k of Object.keys(obj1)) {
        const v = obj1[k]
        if(v === undefined) continue;
        if(res != '') res += '&'
        res += k + '=' + v
    }
    return res
}

//console.log(query1(obj1))

function query2(obj) {
    return Object.entries(obj1)
        .reduce((query, [k, v], i) => {
            if(v === undefined) return query;
            return query + (i >0 ? '&' : '') + k + '=' + v;
        }, '')
}

//console.log(query2(obj1))

function query3(obj) {
    return _.reduce((a, b) => `${a}&${b}`,
            _.map(([k, v]) => `${k}=${v}`,
             _.reject(([k, v]) => v === undefined, 
              Object.entries(obj1))))
}

console.log(query3(obj1))