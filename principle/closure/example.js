function outer(first)  {
    const intro = 'hello, my name is '
    return function inner(second) {
        //console.log(intro + first + second)
    }
}

const f = outer('Seo ')
f('Jeong Kuk')

//==================================

function test() {

    var id = 999;
    return {
        getId: function() {
            return id;
        },

        setId: function(_id) {
            id = _id
        }
    }
}

var obj = test();
console.log(obj.getId())
obj.setId(10)
console.log(obj.getId())