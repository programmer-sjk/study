class Person1 implements IPerson{
    name: string
    age: number
}

let seo1: Person1 = new Person1()
seo1.name = 'seo';
seo1.age = 31;
console.log(seo1);

class Person2 implements IPerson {
    constructor(public name: string, public age: number) {}
}

let seo2: Person2 = new Person2('seo2', 31)
console.log(seo2)
console.log(seo2.name)
interface IPerson {
    name: string,
    age : number
}

class StaticTest {
    static initValue = 1;
}

console.log(StaticTest.initValue)