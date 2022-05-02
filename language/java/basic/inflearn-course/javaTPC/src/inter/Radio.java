package inter;

public class Radio implements RemoCon{
    public void chUp() {
        System.out.println("라디오 채널 업");
    }

    @Override
    public void chDown() {
        System.out.println("라디오 채널 다운");
    }

    @Override
    public void internet() {
        System.out.println("인터넷이 안된다.");
    }
}
