package heritage;

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();

        Cat c = new Cat();
        c.eat();

        Animal a = new Dog();
        a.eat();
        a = new Cat();
        a.eat();
        ((Cat)a).night();
    }
}
