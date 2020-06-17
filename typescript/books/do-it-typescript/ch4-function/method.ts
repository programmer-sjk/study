class A {
    value: number = 1
    method: () => void = function(): void {
        console.log(this.value)
    }
}

const a = new A();

console.log(a.value);
a.method()

class calculator {
    constructor(public value: number = 0) {}
    add(value: number) {
        this.value += value;
        return this;
    }
}

const c = new calculator(1);
console.log(c.add(10).add(1000).add(100).value)