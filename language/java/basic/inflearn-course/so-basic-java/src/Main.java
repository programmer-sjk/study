import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        String[] days = {"월", "화", "수", "목", "금"};
        System.out.println(days[0]);
        System.out.println(days[4]);

        for (String day: days) {
            System.out.println(day);
        }

        System.out.println("================");
        System.out.println(Arrays.toString(days));

        arrayOfArray();
    }

    private static void arrayOfArray() {
        String[][] days = {
            {"월", "화", "수", "목", "금"},
            {"월", "화", "수", "목", "금"},
            {"월", "화", "수", "목", "금"},
        };

        System.out.println(Arrays.toString(days[0]));
        System.out.println(Arrays.toString(days[1]));
        System.out.println(Arrays.toString(days[2]));
    }

}