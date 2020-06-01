function * fibonacci(seed1, seed2) {
    while (true) {
      yield (() => {
        seed2 = seed2 + seed1;
        seed1 = seed2 - seed1;
        return seed2;
      })();
    }
  }
  
  const fib = fibonacci(0, 1);
  console.log(fib.next()); 
  console.log(fib.next()); 
  console.log(fib.next()); 
  console.log(fib.next()); 
  console.log(fib.next()); 
  console.log(fib.next()); 
  console.log(fib.next()); 



/*
function * generator(arg = 'Nothing') {
    yield 1;
    yield 2;
  }
  
  const gen0 = generator(); // OK
  const gen1 = generator('Hello'); // OK
  console.log(gen0.next()); 
  console.log(gen0.return('aa')); 
  console.log(gen0.next()); 
*/


/*
function * generator() {
    yield 1;
    return 2;
    yield 3; // we will never reach this yield
  }
  
  const g = generator();
  
  console.log(g.next())
  console.log(g.next())
  console.log(g.next())
*/

/* the last g.next will return done: true
function* testYield(a) {
    let b = 5;
    yield a+b;

    b = 6;
    yield a*b;
}

const g = testYield(3);
console.log(g.next())
console.log(g.next())
console.log(g.next())
*/

/*
class MyClass {
    *generator() {}
}
*/
//let generator = function* () {}
//let generator = function *() {}


/*
function * generatorForLoop(num) {
    for (let i = 0; i < num; i += 1) {
      yield console.log(i);
    }
  }
  
  const genForLoop = generatorForLoop(5);
  
  genForLoop.next(); // first console.log - 0
  genForLoop.next(); // 1
  genForLoop.next(); // 2
  genForLoop.next(); // 3
  genForLoop.next(); // 4
*/


/* ex1
function* gen() {
    yield 1
    yield 2
    yield 3
}

const g = gen();
console.log(g)
*/