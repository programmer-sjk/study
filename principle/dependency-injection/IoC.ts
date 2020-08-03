class A {
    b: B;
    constructor() {
        //this.b = new B()
        this.b = Factory.GetObjectOfB();
    }

    public task1() {
        this.b.doSomething()
    }
}

class B {
    public doSomething() {
        console.log("do something")
    }
}

class Factory {
    public static GetObjectOfB() {
        return new B()
    }
}

new A().task1()

