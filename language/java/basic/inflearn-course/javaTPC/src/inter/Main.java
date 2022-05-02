package inter;

public class Main {
    public static void main(String[] args) {
        RemoCon r = new TV();
        r.chUp();
        r.internet();

        r = new Radio();
        r.chUp();
        r.internet();
    }
}
