/**
 * 문제. 숫자 배열이 들어올 때 2의 제곱일 경우 1을 아닌 경우 0으로 배열을 리턴한다.
 * ex) [1,2,3,12,16] -> [1,1,0,0,1] 1도 2의 0승.
 */
public class Problem1 {
    public static final int ZERO = 0;

    public static List<Integer> isPower(List<Integer> arr) {
        return arr.stream()
                .map(value -> powerCheck(value))
                .collect(Collectors.toList());
    }

    public static int powerCheck(int value) {
        if (value == ZERO) {
            return ZERO;
        }

        if (value == 1) {
            return 1;
        }

        if (isOdd(value)) {
            return ZERO;
        }

        return powerCheck(value / 2);
    }

    public static boolean isOdd(int value) {
        if (value % 2 == 1) {
            return true;
        }
        return false;
    }
}
