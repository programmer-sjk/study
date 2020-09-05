const FxJS = require("fxjs");
const { reduce, go, log, map, curry } = FxJS;

const join = curry((sep = ',', iter) => 
    reduce((a, b) => `${a}${sep}${b}`, iter))

const queryStr = obj => go(
    obj,
    Object.entries,
    map(([k, v]) => `${k}=${v}`),
    join('&')
)

log(queryStr({limit: 10, offset: 10}))
log(join(' - ', [1, 2, 3, 4]))