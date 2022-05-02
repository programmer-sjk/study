package basic;

class Npc {
    String name;
    int hp;
    void say() {
        System.out.println("안녕하세요.");
    }
}

public class MyNpc {
    public static void main(String[] args) {
        Npc sara = new Npc();
        sara.name = "sara";
        sara.hp = 100;
        sara.say();

    }
}
