public class Poly {
    public static void main(String[] args) {
        Poly p = new Poly();
        p.moveAnimal(new Human());
        p.moveAnimal(new Tiger());
    }

    public void moveAnimal(Animal animal) {
        animal.move();
    }
}

class Human extends Animal {
    public void move() {
        System.out.println("사람이 두 발로 걷습니다.");
    }
}

class Tiger extends Animal {
    public void move() {
        System.out.println("호랑이가 두 발로 걷습니다.");
    }
}

class Animal {
    public void move() {
        System.out.println("동물이 움직입니다.");
    }
}
