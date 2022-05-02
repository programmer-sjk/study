package template;

public class CarTest {
    public static void main(String[] args) {
        Car myCar = new ManualCar();
        myCar.run();

        Car youCar = new AiCar();
        youCar.run();
    }
}
