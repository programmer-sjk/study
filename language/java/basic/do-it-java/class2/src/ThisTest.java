import java.sql.SQLOutput;

class Birthday {
    int day;
    int month;
    int year;

    public void setYear(int year) {
        this.year = year;
    }

    public void printThis() {
        System.out.println(this);
    }
}

public class ThisTest {
    public static void main(String[] args) {
        Birthday b = new Birthday();
        Birthday b2 = new Birthday();

        System.out.println(b);
        b.printThis();
        System.out.println(b2);
        b2.printThis();

    }
}
