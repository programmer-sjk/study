public class Student {
    static int pivotId = 10000;
    int id;
    String name;

    public Student() {
        id = ++pivotId;
    }
}
