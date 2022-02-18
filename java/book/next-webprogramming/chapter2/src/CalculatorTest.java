public class CalculatorTest {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        add(c);
        subtract(c);
        multiply(c);
        divide(c);
    }

    private static void add(Calculator c) {
        System.out.println(c.add(1,2));
    }

    private static void subtract(Calculator c) {
        System.out.println(c.subtract(1,2));
    }

    private static void multiply(Calculator c) {
        System.out.println(c.multiply(1,2));
    }
    private static void divide(Calculator c) {
        System.out.println(c.divide(1,2));
    }

}
