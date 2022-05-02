import * as R from 'ramda'
console.log(R.range(1, 9+1))
console.log(R.add(1,2), R.add(1)(2))

const arr: number[] = [1,2,3];
const newArr = R.prepend(1)(arr);
console.log(arr, newArr)
