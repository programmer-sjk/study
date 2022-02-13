package TCP06;

public class CallBy {
    public static void main(String[] args) {
        int a = 20;
        int b  = 30;
        int ret = sum(a, b); // Call by value
        System.out.println(ret);

        int[] arr = {1,2,3,4,5};
        int ret2 = arrSum(arr);
        System.out.println(ret2);
    }

    public static int sum(int a, int b) {
        return a + b;
    }

    public static int arrSum(int[] arr) {
        int sum = 0;
        for(int i: arr) {
            sum += i;
        }
        return sum;
    }
}
