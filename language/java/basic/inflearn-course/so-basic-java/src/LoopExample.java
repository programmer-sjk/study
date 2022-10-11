import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class LoopExample {
    public static void main(String[] args) {
        List<String> foods = new ArrayList<>();
        foods.add("치킨");
        foods.add("피자");
        foods.add("고구마");

        for (String food : foods) {
            System.out.println(food + " 맛있어요");
        }
    }
}
