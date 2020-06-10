/*
                                CREATE  READ  UPDATE  DELETE
    Object.freeze                  X      O     X       X    
    Object.seal                    X      O     O       X  
    Object.preventExtensions       X      O     O       O     
*/


// preventExtensions
console.log('/////////////preventExtensions//////////////////')
const obj = {
    id: 42
};
console.log(Object.isExtensible(obj))
Object.preventExtensions(obj); // JS Object 속성이 추가되는것을 막는다.
console.log(Object.isExtensible(obj))

obj.name = 'seo jeong kuk';
console.log(obj); // => { id: 42 } 

// seal (봉인), 객체 property의 추가를 방지, 모든 property를 non-configurable, 즉 삭제불가능
console.log('/////////////seal//////////////////')
const obj2 = {
    id: 42
};
Object.seal(obj2);

delete obj2.id 
obj2.name = 'seo jeong kuk';
console.log(obj2);
console.log(Object.isExtensible(obj2));
console.log(Object.isSealed(obj2));

// object freeze, JS에서 객체를 가장 많이 제한하는 방법
// Object.seal을 호출한다. 존재하는 properties의 변경을 막는다.
console.log('/////////////freeze//////////////////')
const obj3 = {
    id: 42
};
Object.freeze(obj3);
delete obj3.id 

obj.name = 'seo jeong kuk';
console.log(obj3);

console.log(Object.isExtensible(obj3));
console.log(Object.isSealed(obj3));
console.log(Object.isFrozen(obj3));
