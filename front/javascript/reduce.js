const nums = [0,1,2,3,4]

// 배열의 합을 구하는 코드

const result = nums.reduce((prev, curr) => {
    return prev + curr;
});

const result2 = nums.reduce((prev, curr) => {
    return prev + curr;
}, 10);

console.log(result)
console.log(result2)

// 배열 객체의 합 구하기

const o = [{x:1}, {x:2}, {x:3}, {x:4}]
const sum = o.reduce((prev, curr) => prev + curr.x, 0)
console.log(sum)

// 객체의 중복개수
const fruits = ["banana", "kiwi", "mango", "banana", "watermelon", "peach", "peach"]
const ret = fruits.reduce((acc, value) => {
    if(value in acc) {
        acc[value]++;
    } else {
        acc[value] = 1
    }
    return acc;
}, {})

console.log(ret)

// 홀 or 짝 구하기
const nums2 = [1,2,3,4,5,6,7,8,9,10];
const r = nums2.reduce((acc, val) => val % 2 && acc || [...acc, val], [])
console.log(r)

// filter 대신하기, 7보다 크면 제외
console.log(nums2.filter(v => v <= 7))
const r2 = nums2.reduce((acc, val) => {
    if(val <= 7)
        acc = [...acc, val];
    return acc
}, [])
console.log(r2)
