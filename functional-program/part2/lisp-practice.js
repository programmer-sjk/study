const FxJS = require("fxjs");
const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");
const C = require("fxjs/Concurrency");
const { reduce, filterL, mapC, go, log, map } = FxJS;

// 별 그리기
_.go(
    _.range(1, 6),
    _.map(_.range),
    console.log
)