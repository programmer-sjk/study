const range = (from: number, to: number): number[] => from < to? [from, ...range(from+1, to)] : []
const nums: number[] = range(1, 11)
console.log(nums)

/////////////////filter////////////////////
const odds: number[] = nums.filter(num => num % 2 === 1)
const evens: number[] = nums.filter(num => num % 2 === 0)

console.log(odds, evens)

/////////////////map////////////////////
console.log(nums.map((val: number) => val * val))

/////////////////reduce////////////////////
const sum: number = range(1, 101).reduce((result: number, value: number) => result + value, 0)
console.log(sum)