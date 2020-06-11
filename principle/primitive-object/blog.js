const obj = {
    name: 'seo jeong kuk'
}

Object.freeze(obj);
obj.age = 31;    // 동작하지 않음

console.log(obj) // {name: 'seo jeong kuk'}

delete obj.name;
console.log(obj) // {name: 'seo jeong kuk'}

obj.name = 'SEO JEONG KUK'
console.log(obj) // {name: 'seo jeong kuk'}

console.log(Object.isExtensible(obj)) // false
console.log(Object.isSealed(obj))     // true
console.log(Object.isFrozen(obj))     // true
/*
const obj = {};

Object.defineProperty(obj, 'id', {
    value: 42,
    writable: true,
    configurable: true
});

console.log(obj)
console.log(obj.id)
obj.id = 100;
console.log(obj.id)
console.log(Object.getOwnPropertyDescriptor(obj, 'id'))

Object.defineProperty(obj, 'id', {
    value: 100,
    enumerable: true
});
console.log(obj)
*/


// property type에 따른 결과
/*
const dataProperty = {
    x: 1
}

const accessorProperty = {
    get x() {
        return 1;
    }
}

console.log(Object.getOwnPropertyDescriptor(dataProperty, 'x'))
/* output 결과
{ value: 1, 
  writable: true, 
  enumerable: true, 
  configurable: true }
*/

//console.log(Object.getOwnPropertyDescriptor(accessorProperty, 'x'))
/* output 결과
{ get: [Function: get x],
  set: undefined,
  enumerable: true,
  configurable: true }
*/


/*
const o = {
    name: 'seo jeong kuk',
    age: 31
}

const accessor = {
    _name: 'seo jeong kuk',
    _age : 31,
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value;
    },
    get age() {
        return this._age;
    },
    set age(value) {
        this._age = value;
    }
}

console.log(accessor.name);
accessor.name = 'SEO JEONG KUK';
console.log(accessor.name);

const object = {
    set x(value) {
        // value is 3
    }
};

object.x = 3 // 대입한 3이 argument로 전달됨

console.log(Object.getOwnPropertyDescriptor(object, 'x'))
*/