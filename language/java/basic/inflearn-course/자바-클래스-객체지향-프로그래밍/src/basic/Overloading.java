package basic;

class Calculate {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}

public class Overloading {
    public static void main(String[] args) {
        Calculate c = new Calculate();
        System.out.println(c.add(1,2));
        System.out.println(c.add(1.1,2.2));
    }
}
