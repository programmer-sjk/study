package calculator;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }

    int multiply(int a, int b) {
        return a * b;
    }

    int divide(int a, int b) {
        return a / b;
    }

    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println(c.add(1,2));
        System.out.println(c.subtract(1,2));
        System.out.println(c.multiply(1,2));
        System.out.println(c.divide(1,2));
    }
}
