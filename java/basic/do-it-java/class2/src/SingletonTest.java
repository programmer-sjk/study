public class SingletonTest {
    public static void main(String[] args) {
        Company c = Company.getInstacne();
        Company c2 = Company.getInstacne();

        System.out.println(c);
        System.out.println(c2);

    }
}
