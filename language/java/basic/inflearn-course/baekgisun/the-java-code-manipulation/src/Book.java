import java.lang.annotation.Inherited;

@MyAnnotation()
public class Book {
    @MyAnnotation
    public int a;
    private String b;

    public Book() {

    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public String getB() {
        return b;
    }

    public void setB(String b) {
        this.b = b;
    }
}
