import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class MapExample {
    public static void main(String[] args) {
        Map<String, String> dictionary = new HashMap<>();
        dictionary.put("chicken", "닭");
        dictionary.put("ham", "햄");

        System.out.println(dictionary);
        System.out.println(dictionary.get("chicken"));
        System.out.println(dictionary.size() + " 개의 단어가 있습니다.");
        System.out.println("=======================================");

        for (String key : dictionary.keySet()) {
            System.out.println("key: " + key);
        }

        for (String value : dictionary.values()) {
            System.out.println("value: " + value);
        }

        for (Map.Entry<String, String> entry : dictionary.entrySet()) {
            System.out.println("key : " + entry.getKey() + " " + "value : " + entry.getValue());
        }
    }
}
