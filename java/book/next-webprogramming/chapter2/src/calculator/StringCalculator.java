package calculator;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static java.lang.Integer.*;

public class StringCalculator {
    public static void main(String[] args) throws RuntimeException{
        Scanner scan = new Scanner(System.in);
        String s = scan.nextLine();
        int ret = add(s);
        System.out.println(ret);
    }

    private static int add(String s) {
        if (s.isEmpty()) {
            return 0;
        }

        String[] arr = s.split(",|:");

        return sumByArrays(arr);
    }


    private static int sumByArrays(String[] arr) {
        int sum = 0;
        for (String el : arr) {
            try {
                int i = parseInt(el);
                if (i < 0) throw new RuntimeException();
                sum += i;
            } catch(NumberFormatException e) {}
        }
        return sum;
    }
}
