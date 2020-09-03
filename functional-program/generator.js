// Generator - 이터레이터이자 이터러블을 생성하는 함수

function *gen() {
    yield 1;
    yield 2;
    yield 3;
}

const iter = gen();
console.log(iter[Symbol.iterator])
console.log(iter[Symbol.iterator]())
console.log(iter[Symbol.iterator]() == iter)
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

for(const i of gen()) console.log(i)

// generator 활용, 홀수만 순회
function *odds(val) {
    for(let i=0; i < val; i++) {
        if(i % 2) yield i;
    }
}

const iter2 = odds(10);
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())

// generator 활용, 무한
function *infinite(i = 0) {
    while(true) yield i++;
}

function *odds2(val) {
    for(const i of infinite(1)) {
        if(i % 2) yield i;
        if(i == val) return ;
    }
}

// 전개 연산자
console.log(...odds2(10))