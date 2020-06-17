// 함수 선언문
function add(a: number, b: number): number {
    return a + b;
}

// 함수 expression
const printMe: (string, number) => void = function(name: string, age: number): void {
    console.log(name + '의 나이는' + age)
}

// arrow function
const arrowPrintMe = (name: string, age: number):void => {
    console.log(name + '의 나이는' + age)
}

printMe("seo jeong kuk", 31)
arrowPrintMe("seo jeong kuk", 31)

type nameAgeFunc = (string, number) => void;
const printMe2: nameAgeFunc = function(name: string, age: number): void {
    console.log(name + '의 나이는' + age)
}
printMe2("seo jeong kuk", 31)