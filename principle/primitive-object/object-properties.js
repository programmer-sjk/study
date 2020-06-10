/* 각 property 설명
    1. [[Value]] 
    - property에 해당하는 값을 저장한다. object.x는 실제로 x에 대하 [[value]] attribute를 리턴한다. 
    - dot access와 square-bracket가 해당방식으로 동작한다.
    2. [[Get]]
    - getter property로 선언한 함수의 reference를 저장한다.
    3. [[Set]]
    - setter property로 선언한 함수의 reference를 저장한다.
    - 우리가 할당한 값이 유일한 인자로 함수에게 전달된다. ex) o.x = 1, 여기서 1이 인자로 전달됨 
    4. [[Writable]]
    - boolean, 우리가 값을 변경할수 있는지 여부, false 라면 property의 value는 변경되지 않는다.
    5. [[Enumerable]]
    - boolean, 해당 property가 for-in loop에 나타나는지 여부. true 라면 for-in loop는 이 property를 반복할 수 있다.
    6. [[Configurable]]
    - boolean, false일 경우엔 delete 명령어가 실패하고, 속성값이 변경되지 않는다.

객체의 property는 data property와 accessor property가 있다.
data property의 경우 오직 writealbe을 true -> false로 변경할 수 있다.
writeable이 true일 경우에만 [[Value]] 값을 변경할 수 있다.
한번 writeable이 false가 되고 configurable 도 false라면 해당 property는 unwritable, undeletable and unchangeable.

6개의 property는 property type에 따라 다르게 존재한다.
data property일 경우,  value, writable, enumerable and configurable exists.
access property일 경우, get, set, enumerable and configurable
*/
const o = {x: 1, y:2}
console.log(Object.getOwnPropertyDescriptor(o, "x")); // { value: 1, writable: true, enumerable: true, configurable: true }

const o2 = {
    get x() {
        return 1;
    }
}
console.log(Object.getOwnPropertyDescriptor(o2, "x")); // { get: [Function: get x], set: undefined, enumerable: true, configurable: true }

const o3 = {
    _x: 0,
    get x() {
        this._x;
    },
    set x(v) {
        this._x = v;
    }
}
console.log(Object.getOwnPropertyDescriptor(o3, "x")); // { get: [Function: get x], set: [Function: set x], enumerable: true, configurable: true }



const obj = {};
// enumerable or configurable을 지정하지 않으면 default 값은 false이다. id는 writeable이며 enumerable, configurable는 false
Object.defineProperty(obj, 'id', {
  value: 42
});

console.log(obj);   // {}, enumerable이 false이기 때문에 print안됨
console.log(obj.id);// 42

Object.defineProperty(obj, 'name', {
  value: 'seo jeong kuk',
  writable: false,
  enumerable: true,
  configurable: true
});

console.log(obj.name); // seo jeong kuk

obj.name = 'SEO JEONG KUK' // writable이 false이기 때문에 no effect
console.log(obj.name); // seo jeong kuk

Object.defineProperty(obj, 'lastName', {
  value: 'seo',
  enumerable: false,
});

console.log(Object.keys(obj)); // [name]
delete obj.id; // configurable이 default에 의해 false이기 때문에 no effect
console.log(obj.id); // 42

///////////
const obj2 = {
    id: 42
};
console.log(Object.isExtensible(obj2))
Object.preventExtensions(obj2); // JS Object 속성이 추가되는것을 막는다.
console.log(Object.isExtensible(obj2))

obj2.name = 'seo jeong kuk';
console.log(obj2); // => { id: 42 } 