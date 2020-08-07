const arr = [1,2,3,4];
const start = new Date().getTime();
const log = (...args) => {
    const now = new Date().getTime()
    console.log(`${Math.floor((now - start)/1000)} sec`, ...args)
}

function test() {
    // Question. 아래 코드의 실행결과 예상
    for(var i=0; i < arr.length; i++) {
        setTimeout(() => {
            log(arr[i])
        }, i * 1000);
    }

    // 해답 1. let 사용
    // 해답 2. closure 사용
}

test()

