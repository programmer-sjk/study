public class Company {
    static private Company instacne = new Company();

    private Company() {}

    public static Company getInstacne() {
        return instacne;
    }
}
