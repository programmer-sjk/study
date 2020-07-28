const isDone: boolean = true;
const num: number = 3;
const alias: string = 'Seo Jeong Kuk'

const list: number[] = [1,2,3]
const list2: Array<number> = [1,2,3]
const tuple: [string, number] = ['hello', 1]

enum Color {Red, Green, Blue}
let r: Color = Color.Red;
let g: Color = Color.Green;
let b: Color = Color.Blue;
console.log(r,g,b)

enum Color2 {Red=1, Green, Blue}
let r2: Color2 = Color2.Red;
let g2: Color2 = Color2.Green;
let b2: Color2 = Color2.Blue;
console.log(r2,g2,b2)

let notSure: any = 1;
console.log(notSure)
notSure = 'Seo Jeong Kuk'
console.log(notSure)

let list3: any[] = [1, 'aa', 3, 'bb']
console.log(list3)
function printString(): void {
    console.log('aa')
}
printString()
