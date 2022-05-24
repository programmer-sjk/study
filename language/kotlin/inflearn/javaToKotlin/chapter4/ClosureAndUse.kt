package chapter4

fun main() {
    /**
     * 자바의 Try with resocures 대신 use 라는 확장함수를 사용한다
     */
}


fun closureExample() {
    var target = "바나나"
    target = "사과"
    /**
     * 아래가 코틀린의 Closure, 자바는 아래 코드가 실패함
     * 코틀린은 람다가 시작하는 지점에 참조하고 있는 변수들을 모두 포회하여 정보를 가지고 있다.
     */
//    filterFruits(fruits) { it.name == target }
}
