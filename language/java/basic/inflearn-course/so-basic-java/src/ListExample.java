import java.util.*;

public class ListExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("치킨");
        list.add("피자");

        boolean containsChicken = list.contains("치킨");

        System.out.println(list);
        System.out.println(list.get(0));
        System.out.println("contain Chicken :" + containsChicken);

        uniqueFoods();
        initialize();
    }

    private static void initialize() {
        List<String> names = Arrays.asList("서정국", "서정국1", "서정국2");
    }

    private static void uniqueFoods() {
        System.out.println("저장할 음식 입력 (종료: 0)");
        List<String> foods = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            String food = scanner.nextLine();

            if (food.equals("0")) {
                break;
            }

            if (foods.contains(food)) {
                System.out.println("이미 목록에 있습니다.");
            } else {
                foods.add(food);
            }
        }

        Collections.sort(foods);
        System.out.println(foods);

        Collections.reverse(foods);
        System.out.println(foods);

        Collections.shuffle(foods);
        System.out.println(foods);
    }

}
