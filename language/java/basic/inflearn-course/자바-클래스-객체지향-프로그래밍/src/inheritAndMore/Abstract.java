package inheritAndMore;

abstract class Animal {
    int age;
    abstract void cry();
}

class Dog extends Animal {
    void cry() {
        System.out.println("멍멍");
    }
}

public class Abstract {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.cry();
    }
}
