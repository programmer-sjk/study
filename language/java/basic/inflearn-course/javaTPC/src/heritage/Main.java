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

        Animal[] ani = new Animal[2];
        ani[0] = new Dog();
        ani[1] = new Cat();

        for(Animal animal: ani) {
            animal.eat();
        }
    }
}
