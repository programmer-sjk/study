package bbb;

class Private {
    private int day;
    private int month;
    private int year;

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }
}

public class PrivateTest {
    public static void main(String[] args) {
        Private p = new Private();
        p.setDay(30);
        p.setMonth(2);
        p.setYear(2022);

    }
}
