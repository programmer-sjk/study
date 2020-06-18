type firstOrder<T, R> = (T) => R
type secondORder<T, R> = (T) => firstOrder<T, R>
type thirdORder<T, R> = (T) => secondORder<T, R>


const inc: firstOrder<number, number> = (x: number): number => x + 1
const add: secondORder<number, number> = 
    (x: number): firstOrder<number, number> =>
    (y: number): number => x + y

console.log(add(1)(2))
