const nums: number[] = [1,2,3,4,5];
for(let v of nums) 
    console.log(v);

function* generator() {
    console.log('generator start')
    let value = 1;
    while(value < 4) {
        yield value++
    }
    console.log('generator end')
}

for(let value of generator()) 
    console.log(value)
