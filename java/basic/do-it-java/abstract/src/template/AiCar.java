package template;

public class AiCar extends Car{
    @Override
    public void drive() {
        System.out.println("AI가 운전합니다.");
    }

    @Override
    public void stop() {
        System.out.println("AI가 멈춥니다.");
    }
}
