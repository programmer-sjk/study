function fDeclaration() {
    console.log('this is function Declaration, it will be hoisted')
}

const fExpression = function() { console.log('this is function expression, it will not be hoisted')}
const fboth = function f(count = 0) {
    if(count > 3) return ;
    console.log('In case of this, function name "f" is used inside of function.')
    console.log('if you use name f outside of function, it will occur error')
    f(++count)
}

fDeclaration()
fExpression()
fboth()
//f() it will occur error.

