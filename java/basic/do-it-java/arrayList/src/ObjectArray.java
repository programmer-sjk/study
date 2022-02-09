public class ObjectArray {
    public static void main(String[] args) {
        Book[] books = new Book[5];
        books[0] = new Book("태백산맥", "서정국");
        books[1] = new Book("태백산맥1", "서정국");
        books[2] = new Book("태백산맥2", "서정국");
        books[3] = new Book("태백산맥3", "서정국");
        books[4] = new Book("태백산맥4", "서정국");

        for(int i = 0 ; i < books.length; i++) {
            System.out.println(books[i]);
//            books[i].showBookInfo();
        }

        for(Book b: books) {
            b.showBookInfo();
        }
    }
}
