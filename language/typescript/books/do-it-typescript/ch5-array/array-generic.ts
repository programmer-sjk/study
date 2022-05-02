const arrayLength = <T>(array: T[]): number => array.length

const nums: number[] = [1,2,3,4,5];
const names: string[] = ['seo', 'jeong', 'kuk']
type IPerson = {name: string, age?: number}
let persons: IPerson[] = [{name: 'seo', age: 31}, {name: "joe"}]

console.log(arrayLength(nums), arrayLength(names), arrayLength(persons))