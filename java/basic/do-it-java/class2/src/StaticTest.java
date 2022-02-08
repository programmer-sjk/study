public class StaticTest {
    public static void main(String[] args) {
        System.out.println(Student.pivotId);
        Student s = new Student();
        Student s2 = new Student();

        System.out.println(s.id);
        System.out.println(s2.id);
    }
}
