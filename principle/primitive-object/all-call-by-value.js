/*
    JS는 항상 call by value이다. 
    인자가 Object인 경우 value는 Object의 reference 값이다.
    함수 내부에서 변수의 값을 변경해도 밖의 primitive , object에는 영향이 없다.
    object의 property를 변경하는 경우 원본 객체의 속성 값이 변경된다.
*/

var o = {name: 'seo jeong kuk'};

function assignNewObject(param) {
    param = {name: 'Lupy'};
}

console.log('=============original obj=============')
console.log(o);

assignNewObject(o);

console.log('=============After function call obj=============')
console.log(o);