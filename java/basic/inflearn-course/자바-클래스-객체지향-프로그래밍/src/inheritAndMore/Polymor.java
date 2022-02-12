package inheritAndMore;

abstract class Calc {
    int a = 5;
    int b = 6;
    abstract void plus();
}

class MyCalc extends Calc {
    public void plus() {
        System.out.println(a + b);
    }

    public void minus() {
        System.out.println(a - b);
    }
}

public class Polymor {
    public static void main(String[] args) {
        MyCalc mc = new MyCalc();
        mc.plus();
        mc.minus();

        Calc c = new MyCalc();
        c.plus();
    }
}
