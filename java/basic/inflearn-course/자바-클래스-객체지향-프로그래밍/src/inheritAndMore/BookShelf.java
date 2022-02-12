package inheritAndMore;

class Book {
    String title;

    void printBook() {
        System.out.println("제목: " + title);
    }
}

class Novel extends Book {
    String writer;

    void printNovel() {
        printBook();
        System.out.println("저자: " + writer);
    }
}

class Magazine extends Book {
    int day;

    void printMagazine() {
        printBook();
        System.out.println("발매일: " + day);
    }
}

public class BookShelf {
    public static void main(String[] args) {
        Novel n = new Novel();
        n.title = "홍길동";
        n.writer = "허균";

        Magazine m = new Magazine();
        m.title = "월간 인프런";
        m.day = 20;

        n.printNovel();
        System.out.println();
        m.printMagazine();
    }
}
