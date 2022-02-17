import java.util.Arrays;

public class App {
    public static void main(String[] args) {
        Class<Book> b = Book.class;
        Arrays.stream(b.getFields()).forEach(System.out::println);
        Arrays.stream(b.getDeclaredFields()).forEach(System.out::println);

        System.out.println();
        Arrays.stream(b.getMethods()).forEach(System.out::println);

        System.out.println();
        Arrays.stream(b.getMethods()).forEach(f -> {
            int modifiers = f.getModifiers();
            System.out.println(f.getName());
            System.out.println(f.getParameterCount());
        });
    }
}
