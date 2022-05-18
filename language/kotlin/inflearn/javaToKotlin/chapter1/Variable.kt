fun main() {
    variable()
}

fun variable() {
    // var and val
    var number1 = 10L
    val number2 = 10L

    // 초기화
    var number3: Int = 3
    //println(number3) 초기화 되지 않아 에러가 발생
    val number4: Int
    number4 = 3 // 초기화 되지 않은 val에 대해서는 최초 한 번 값을 대입할 수 있다

    // null 처리
    var number5: Int? = null
}
