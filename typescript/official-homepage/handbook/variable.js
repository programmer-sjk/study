let input = [1,2];
let [first, second] = input
console.log(first)
console.log(second)

let [firstt, ...rest] = [1, 2, 3, 4];
console.log(firstt); 
console.log(rest); 

let o = {'name': 'seo', age: 31};
let {name, age} = o
console.log(name, age)
