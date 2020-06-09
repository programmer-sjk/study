// then은 함수를 받는다. 함수의 결과를 전달할 경우, 앞 then을 받는다.

const doWork = () => new Promise((resolve, reject) => resolve(10));
const doWorkOther = () => new Promise((resolve, reject) => resolve(20));

doWork().then(doWorkOther).then(v => console.log('1st: ' + v))   // 20
doWork().then(doWorkOther()).then(v => console.log('2st: ' + v)) // 10

const asyncDoWork = () => new Promise((resolve, reject) => setTimeout(() => resolve(10), 100));
const asyncDoWorkOther = () => new Promise((resolve, reject) => setTimeout(() => resolve(20), 100));


doWork().then(asyncDoWorkOther).then(v => console.log('async 1st: ' + v))   // 20
doWork().then(asyncDoWorkOther()).then(v => console.log('async 2st: ' + v)) // 10

// 위 코드는 아래의 코드로 확인가능.
doWork()
    .then(5)
    .then(v => console.log(v))

doWork()
    .then(() => 20)
    .then(v => console.log(v))