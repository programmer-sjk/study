// Promise Resolve의 다양한 선언 방법
const p1 = () => {
    return Promise.resolve(1)
}
const p2 = Promise.resolve(2);
const p3 = () => Promise.resolve(3);

// 각 선언에 따른 then  
p1().then(r => console.log(r))
p2.then(r => console.log(r))
p3().then(r => console.log(r))

// Promise.resolve then에서 async 연산 시, Promise.resolve 값을 잃어버림
const resolveLoseValueinAsync = () => {
    return Promise.resolve(1)
        .then(r => setTimeout(() => Promise.resolve(1), 100))
        //.then(r => Promise.resolve(1)) // 동기적인건 정상임.
}

resolveLoseValueinAsync().then(r => console.log(r))

// return new Promise에선 비 동기 값을 정상적으로 가져온다.
const returnNewPromiseWorkWell = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 100);
    })
}

returnNewPromiseWorkWell().then(r => console.log(r))