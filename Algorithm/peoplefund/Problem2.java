/**
 * 문제. 아는사람, 친구, 베프 class를 만들고 각각 정해신 출력을 하도록 코드를 만들어라.
 */
public class Problem2 {
    public static void main(String args[] ) throws Exception {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT */
        Scanner sc = new Scanner(System.in);
        String sub = sc.nextLine();
        int t = Integer.parseInt(sub);
        for (int i = 0; i < t; i++) {

            String[] input = sc.nextLine().split(" ");

            if(input[0].equals("Acquaintance")) {
                String friendName = input[1];
                Acquaintance acq = new Acquaintance(friendName);
                acq.getStatus();
            } else if (input[0].equals("Friend")) {
                String friendName = input[1];
                String homeTown = input[2];
                Friend frnd = new Friend(friendName, homeTown);
                frnd.getStatus();
            } else if(input[0].equals("BestFriend")) {
                String friendName = input[1];
                String homeTown = input[2];
                String favoriteSong = input[3];
                BestFriend bf = new BestFriend(friendName, homeTown, favoriteSong);
                bf.getStatus();
            }
        }
    }
}

class Acquaintance {
    protected String friendName;

    public Acquaintance(String friendName) {
        this.friendName = friendName;
    }

    public void getStatus() {
        System.out.println(String.format("%s is just an acquaintance.", friendName));
    }
}

class Friend extends Acquaintance {
    protected String hometown;

    public Friend(String friendName, String hometown) {
        super(friendName);
        this.hometown = hometown;
    }

    public void getStatus() {
        System.out.println(String.format("%s is a friend and he is from %s.", friendName, hometown));
    }
}

class BestFriend extends Friend {
    private String favoriteSong;

    public BestFriend(String friendName, String hometown, String favoriteSong) {
        super(friendName, hometown);
        this.favoriteSong = favoriteSong;
    }

    public void getStatus() {
        System.out.println(String.format(
                "%s is my best friend. He is from %s and his favorite song is %s.",
                friendName,
                hometown,
                favoriteSong
        ));
    }
}
