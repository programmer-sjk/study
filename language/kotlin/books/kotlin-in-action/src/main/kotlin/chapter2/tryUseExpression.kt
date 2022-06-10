package chapter2

fun main() {
    val number = try {
        readln().toInt()
    } catch (e: NumberFormatException) {
        null
    }

    println(number)
}
