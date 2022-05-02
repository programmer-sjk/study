package reflectMore;


import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class App {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException, NoSuchFieldException {
        Class<?> bookClass = Class.forName("reflectMore.Book");
        Constructor<?> constructor = bookClass.getConstructor(null);
        Constructor<?> constructor2 = bookClass.getConstructor(String.class);

        Book book = (Book)constructor.newInstance();
        Book book2 = (Book)constructor2.newInstance("test");
        System.out.println(book);
        System.out.println(book2);

        Field a = Book.class.getDeclaredField("A");
        System.out.println(a.get(null));
        a.set(null, "AAAAAAA");
        System.out.println(a.get(null));

        Method c = Book.class.getMethod("c");
        System.out.println(c);
        c.invoke(book);
    }
}
