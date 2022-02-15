package TCP06;

public class JVMExample {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;

        int ret = sum(a, b);
        System.out.println(ret);
    }

    public static int sum(int a, int b) {
        return a + b;
    }
}
