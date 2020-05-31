function fibo(n, n1) {
    return function() {
        n1 = n + n1;
        n  = n1 - n;
        return n1;
    }
}

const n = 10;
const f = fibo(0, 1);

for(i=0; i<10; i++) {
    console.log(f())
}