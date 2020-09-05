// 모나드는 함수 합성을 안전하게 하기 위한 도구
const g = a => a + 1;
const f = a => a * a;

Promise.resolve(1).then(g).then(f).then(console.log)
new Promise(resolve => {
    setTimeout(() => resolve(2), 100)
}).then(g).then(f).then(console.log)

// Kleisli 합성 - 오류나 에러 상황일 때 해결하기 위한 함수 합성 방법
