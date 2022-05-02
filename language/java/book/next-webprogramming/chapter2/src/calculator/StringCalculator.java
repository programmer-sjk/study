package calculator;

import java.util.Scanner;

import static java.lang.Integer.*;

public class StringCalculator {
    public static void main(String[] args) throws RuntimeException{
        Scanner scan = new Scanner(System.in);
        String s = scan.nextLine();
        int ret = add(s);
        System.out.println(ret);
    }

    public static int add(String s) {
        if (isBlank(s)) {
            return 0;
        }

        return sumByArrays(toPositive(split(s)));
    }

    private static boolean isBlank(String s) {
        return s == null || s.isEmpty();
    }

    private static String[] split(String s) {
        return s.split(",|:");
    }

    private static int[] toPositive(String[] s) {
        int[] numbers = new int[s.length];
        for(int i = 0; i < numbers.length; i++) {
            numbers[i] = parseInt(s[i]);
        }
        return numbers;
    }


    private static int sumByArrays(int[] arr) {
        int sum = 0;
        for (int el : arr) {
            if (el < 0) throw new RuntimeException();
            sum += el;
        }
        return sum;
    }
}
