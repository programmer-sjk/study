package basic;

class Calc {
    int add(int a, int b) {
        return a + b;
    }
}

public class Calculation {
    public static void main(String[] args) {
        Calc calc = new Calc();
        int ret = calc.add(1,2);
        System.out.println(ret);
    }
}
