package basic.team1;

import basic.team2.Another2;

public class Testor {
    public int num1;
    private int num2;
    protected  int num3;
    int num4;

    public static void main(String[] args) {
        Testor t = new Testor();
        t.num1 = 1;
        t.num2 = 1;
        t.num3 = 1;
        t.num4 = 1;

        Another a = new Another();
        a.num1 = 1;
        //a.num2 = 1;
        a.num3 = 1;
        a.num4 = 1;

        Another2 a2 = new Another2();
        a2.num1 = 1;
//        a2.num2 = 1;
//        a2.num3 = 1;
//        a2.num4 = 1;

    }
}
