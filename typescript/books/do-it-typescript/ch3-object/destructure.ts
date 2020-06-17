
interface IShoes {
    width: number,
    height: number
}


let shoes: IShoes = {width: 100, height: 31};
console.log(shoes)

let {width, height} = shoes; // 비구조할당
console.log(width, height)

let coord = {...{x:0}, ...{y:1}}
console.log(coord)