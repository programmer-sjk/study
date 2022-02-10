public class AbstractTest {

}

abstract class  Computer {
    public abstract void display();
    public abstract void typing();
//    public abstract void typing();

    public void turnOn() {
        System.out.println("전원을 켭니다.");
    }

    public void turnOff() {
        System.out.println("전원을 니다.");
    }
}
