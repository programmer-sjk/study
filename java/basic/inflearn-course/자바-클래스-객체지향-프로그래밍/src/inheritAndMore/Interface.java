package inheritAndMore;

interface Hi {
    void hi();
}

interface Bye {
    void bye();
}

class Morning implements Hi, Bye {
    public void hi() {
        System.out.println("hi");
    }

    public void bye() {
        System.out.println("bye");
    }
}

public class Interface {

}
