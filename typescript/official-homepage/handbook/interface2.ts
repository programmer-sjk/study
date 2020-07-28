interface SearchFunc {
    (source: string, subString: string): string;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string): string {
    let result = source.search(subString);
    return 'aaa';
}

console.log(mySearch('source', 'subString'))

interface StringArray {
    [index: number]: string;
}

let myArray:StringArray = ["Bob", "Fred"];
let myStr: string = myArray[0];
console.log(myStr)

interface Shape {
    color: string
}

interface Square extends Shape {
    type: 'square'
}

const square = {} as Square
square.color = "blue";
square.type = 'square';


let someValue: any = "this is a string";

let strLength: number = someValue.length;
console.log(strLength)
