interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;
p = new Person()

let x: Named;
let y = {name: "Alice", location: "seoul"}
x = y;
console.log(x)

let x2 = () => ({name: "Alice"});
let y2 = () => ({name: "Alice", location: "Seattle"});

x2 = y2; // OK
//y2 = x2; // Error, because x() lacks a location property
