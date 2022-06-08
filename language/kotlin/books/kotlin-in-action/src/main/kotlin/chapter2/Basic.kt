package chapter2

fun main() {
    println("hello")
    println(max(5, 3))
}

fun max(a: Int, b: Int) = if (a > b) a else b

/** 커스텀 접근자*/
class Rectangle(val height: Int, val width: Int) {
    val isSquare: Boolean
        get() {
            return height == width
        }
}
