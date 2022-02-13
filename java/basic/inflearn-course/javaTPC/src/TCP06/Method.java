package TCP06;

public class Method {
    public static void main(String[] args) {
        int ret = sum(10, 20);
        System.out.println(ret);

        int sum = 0;
        int[] arr = makeIntArr();
        for(int item: arr) {
            sum += item;
        }
        System.out.println(sum);

    }

    public static int sum(int a, int b) {
        return a + b;
    }

    public static int[] makeIntArr() {
        int[] arr = new int[3];
        arr[0] = 10;
        arr[1] = 20;
        arr[2] = 30;
        return arr;
    }
}
