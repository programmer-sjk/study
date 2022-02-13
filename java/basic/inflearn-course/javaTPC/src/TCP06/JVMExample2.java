package TCP06;

public class JVMExample2 {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;

        JVMExample2 example = new JVMExample2();
        int ret = example.sum(10, 20);
        System.out.println(ret);
    }

    public int sum(int a, int b) {
        return a + b;
    }
}
