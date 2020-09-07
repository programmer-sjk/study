const list = [1,2,3];
for(var i=0; i<list.length; i++) {
    console.log(list[i])
}

for(const a of list) {
    console.log(a)
}

// Array
const arr = [1, 2, 3];
//arr[Symbol.iterator] = null;
for(const i of arr) {
    console.log(i)
}

// Set
const set = new Set([1, 2, 3])
for(const i of set) console.log(i)

// Map
const map = new Map([['a', 1], ['b', 2]])
for(const i of map) console.log(i)

console.log(arr[0], set[0], map[0])
console.log(arr[Symbol.iterator], map[Symbol.iterator], set[Symbol.iterator])

/*
    이터러블 / 이터레이터 프로토콜
    - 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
    - 이터레이터: {value, done} 객체를 리턴하는 next() 메소드를 가진 값
    - 이터러블 / 이터레이터 프로토콜: for of, ... 전개 연산자 등과 함께 동작하도록 규약.
*/
const iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
