package chapter3

fun main() {

}

class JavaHouse(
    private val address: String,
    private val livingRoom: LivingRoom
) {
    // 아래와 같이 클래스 내부에 클래스가 선언되면 바깥 클래스와 내부 클래스가 연결되어 있지 않음
    class LivingRoom(private val area: Double)

    // 내부와 외부 클래스가 연결되어 있기 때문에 권장되지 않음
//    inner class LivingRoom(private val area: Double) {
//        val address: String
//            get() = this@JavaHouse.address
//    }
}
