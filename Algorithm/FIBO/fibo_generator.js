function* fibo(seed, seed2) {
    while(true) {
        seed2 = seed2 + seed;
        seed = seed2 - seed;
        yield seed2;    
    }
}

const g = fibo(0, 1);
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())