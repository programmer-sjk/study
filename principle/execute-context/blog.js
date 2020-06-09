function first() {
    console.log('first')
    second();
}

function second() {
    console.log('second');
}

first();


///////////////

function a() {
    //throw Error('error');
}

function b() {
    a();
}

function c() {
    b();
}

c();

///////////////////

console.log(name)
console.log(age)
console.log(getUser)

var name = 'seo';
var age = 31;

function getUser(param) {
    var sex = '남자'
    return {
        name: name, 
        age: age
    }
}

getUser(1);