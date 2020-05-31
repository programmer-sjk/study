function fibo(n) {
    if(n == 1) return 0;
    if(n == 2) return 1;

    return fibo(n-1) + fibo(n-2)
}

const num = 10;
for(let i=1; i<10; i++)
    console.log(fibo(i))