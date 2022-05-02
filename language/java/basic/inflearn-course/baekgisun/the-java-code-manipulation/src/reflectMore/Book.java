package reflectMore;

public class Book {
    public static String A = "AAA";
    public String B = "B";

    public Book() {}

    public Book(String b) {
        B = b;
    }

    public void c() {
        System.out.println("C");
    }

    public int sum(int a, int b) {
        return a + b;
    }
}
