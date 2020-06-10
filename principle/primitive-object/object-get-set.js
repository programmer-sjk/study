// object get 메소드 예제
const accessObj = {
    get name() {
        return 'seo jeong kuk';
    }
}

console.log(accessObj.name) // seo jeong kuk
accessObj.name = 'a' // error가 발생하진 않음
console.log(accessObj.name) // seo jeong kuk

// object get, set 추가
const accessObj2 = {
    _name: 'seo jeong kuk',
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value
    }
}

console.log(accessObj2.name) // seo jeong kuk
accessObj2.name = 'SEO JEONG KUK'
console.log(accessObj2.name) // SEO JEONG KUK