package inter;

public class TV implements RemoCon {

    @Override
    public void chUp() {
        System.out.println("TV 채널 업");
    }

    @Override
    public void chDown() {
        System.out.println("TV 채널 다운");
    }

    @Override
    public void internet() {
        System.out.println("인터넷이 된다.");
    }
}
