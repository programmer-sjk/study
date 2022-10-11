import java.util.HashSet;
import java.util.Set;

public class SetExample {
    public static void main(String[] args) {
        Set<String> foods = new HashSet<>();
        foods.add("치킨");
        foods.add("피자");
        foods.add("치킨");

        System.out.println(foods);
    }
}
