// JS primitive 종류
const primitives = [null, undefined, 1, "String", false, "Symbols"]

// Boolean, Number, String은 객체가 될 수도있다.
console.log(typeof 3)              // number
console.log(typeof new Number(3))  // object

// primitive는 immutable
const num = 42;
num.foo = "foo!";
console.log(num, num.foo) // 42, unfefined

// primitive는 값으로 저장되며 object는 reference로
console.log('compare primitives and object')
console.log("dog" === "dog")
console.log(1 === 1)
console.log(null === null)
console.log(undefined === undefined)
console.log([] === [])
console.log({} === {})

// 함수는 object의 특별형태
const func = function() {};
console.log(typeof func) // function
console.log(func instanceof Object) // true

const foo = function() {};
foo.owner = 'seo jeong kuk';
console.log(foo.name, foo.length); // foo, 0
console.log(foo.owner);            // seo jeong kuk
foo.func = function() {return 3};
console.log(foo.func())            // 3

// 함수는 object 처럼 생성자로 만들수 있다.
const Foo = function() {};
const fooInst = new Foo();
console.log(fooInst instanceof Foo);   // true
console.log(fooInst instanceof Object);// true

const Foo2 = function() {this.bar = "baz"}
const foo2Inst = new Foo2();
console.log(foo2Inst.bar) // baz

const foo2Inst2 = new Foo2();
console.log(foo2Inst2.bar) // baz

foo2Inst.bar = "change!!"
console.log(foo2Inst.bar)  // change!!
console.log(foo2Inst2.bar) // baz

// Wapper Object
console.log(String("dog") === "dog") // true
console.log(new String("dog") === "dog") // false
console.log(typeof new String("dog"), typeof String("dog")) // object, string
