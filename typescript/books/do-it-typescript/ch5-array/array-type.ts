let nums: number[] = [1,2,3,4];
let names: string[] = ['seo', 'jeong']

type IPerson = {name: string, age?: number}
let persons: IPerson[] = [{name: 'seo', age: 31}, {name: "joe"}]
console.log(nums, names)
console.log(persons)