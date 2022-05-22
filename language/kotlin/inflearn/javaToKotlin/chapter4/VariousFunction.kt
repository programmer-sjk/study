package chapter4

fun main() {
    val str = "ABC"
    println(str.lastChar())
}

/** 확장함수 */
fun String.lastChar(): Char {
    return this[this.length - 1]
}
