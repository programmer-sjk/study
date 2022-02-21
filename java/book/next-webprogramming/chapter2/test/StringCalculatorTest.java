package test;

import calculator.StringCalculator;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class StringCalculatorTest {
    private StringCalculator c;

    @BeforeAll
    public void setUp() {
        c = new StringCalculator();
    }

    @Test
    public void add_null_또는_빈문자() {
        assertEquals(0, c.add(null));
        assertEquals(0, c.add(""));
    }

    @Test
    public void add_숫자하나() {
        assertEquals(3, c.add("3"));
    }

    @Test
    public void add_쉼표구분자() throws Exception {
        assertEquals(7, c.add("3,4"));
    }

    @Test
    public void add_쉼표_또는_콜론_구분자() throws Exception {
        assertEquals(9, c.add("3,4:2"));
    }

    @Test
    public void add_negative() {
        assertThrows(RuntimeException.class, () -> {
            c.add("-1,-2");
        });
    }
}
