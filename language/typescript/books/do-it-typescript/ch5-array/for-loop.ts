let numbers: number[] = [1,2,3,4,5];

console.log('===========for in loops===========')
for(let idx in numbers) {
    console.log(numbers[idx])
}

console.log('===========for of loops===========')
for(let number of numbers) {
    console.log(number)
}
