fun main() {
    // 코틀린의 If-else 는 Expression 이다
    returnIfElse(80)
    validateScore(100)
    println(startsWithA(String))
    judgeNumber(0)
    judgeNumber2(0)
    judgeNumber2(1)
    judgeNumber2(2)
}

fun judgeNumber2(num: Int) {
    when(num) {
        0 -> println("주어진 숫자는 0입니다")
        num % 2 -> println("주어진 숫자는 홀수입니다")
        else -> println("주어진 숫자는 짝수입니다")
    }
}

fun judgeNumber(num: Int) {
    when(num) {
        -1, 0, 1 -> println("어디서 많이 본 숫자입니다")
        else -> println("잘 모르는 숫자입니다")
    }
}

fun startsWithA(obj: Any): Boolean {
    return when(obj) {
        is String -> obj.startsWith("A")
        else -> false
    }
}

fun validateScore(score: Int) {
    if (score in 0..10) {
        println("유효한 입력값")
    }

    if (score !in 0..10) {
        println("유효하지 않은 입력값")
    }
}

fun returnIfElse(score: Int): String {
    return if (score > 90) {
        return "pass"
    } else {
        return "fail"
    }
}
