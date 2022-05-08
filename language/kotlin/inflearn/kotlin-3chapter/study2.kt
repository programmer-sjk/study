/**
 * 1. Lambda (람다식은 value처럼 다룰 수 있는 익명 함수이다.)
 * val lambdaName: Type = {argumentList -> body}
 */

val square: (Int) -> String = { number -> (number * number).toString() }
val nameAge = {name: String, age: Int -> "My name is $name i'm $age"}

fun main() {
    println(square(10))
    println(nameAge("꾸기", 33))
    println(pizzeIsGreat("coke"))
    println(calculateGrade(99))
    println(calculateGrade(1000))

    val lambda = {number: Double -> number == 3.14}
    println(invokeLambda(lambda))
    println(invokeLambda { it == 3.14 })
}

// 확장함수
val pizzeIsGreat: String.() -> String = {
    this + "Pizze is the best"
}

// 람다의 리턴 (마지막 한 줄이 리턴을 의미한다)
val calculateGrade: (Int) -> String = {
    when(it) {
        in 0..40 -> "fail"
        in 41..70 -> "pass"
        in 71..100 -> "perfect"
        else -> "unknown"
    }
}

// 람다를 표현하는 2가지 방법 (람다가 함수의 매개변수가 될 때)
fun invokeLambda(lambda: (Double) -> Boolean): Boolean {
    return lambda(3.14)
}