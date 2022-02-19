import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class CalculatorTest {
    private Calculator c;

    @BeforeAll
    public void setUp() {
        c = new Calculator();
        System.out.println("Before all");
    }

    @AfterAll
    public void teardown() {
        System.out.println("After all");
    }

    @Test
    public void add() {
        System.out.println("add");
        assertEquals(3, c.add(1,2));
    }

    @Test
    public void subtract() {
        System.out.println("subtract");
        assertEquals(8, c.subtract(10,2));
    }

}
