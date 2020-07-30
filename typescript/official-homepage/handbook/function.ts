let myAdd = function(x: number, y: number): number { return x + y};
console.log(myAdd(1,2))

let myAdd2: (x: number, y: number) => number = function(x: number, y: number): number {return x + y}
console.log(myAdd2(2,2))


function makeName(first: string, last?: string) {
    if(last)
        console.log(first + ' ' + last)
    else
        console.log(first)
}

makeName('seo')
makeName('seo', 'jeong')

function makeName2(first: string, last: string = 'jeong') {
    console.log(first + ' ' + last)
}
makeName2('seo')
makeName2('seo', 'kuk')


const o = {
    name: 'seooooooooo',
    func: function() {
        console.log(this.name)
    }
}

o.func()
