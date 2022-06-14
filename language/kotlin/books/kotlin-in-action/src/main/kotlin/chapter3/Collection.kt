package chapter3

fun main() {
    val set = hashSetOf(1, 7, 34, 1)
    println(set)

    namingParameter(true)
    namingParameter(isMale = true) // boolean flag에서 가독성이 더 좋다.

    defaultParameter()
    defaultParameter(false)

    println("abc".lastChar)
}

/** naming parameter */
fun namingParameter(isMale: Boolean) {
    println("namingParameter")
}

/** default parameter */
fun defaultParameter(isMale: Boolean = true) {
    println("defaultParameter")
}

/** 확장 프로퍼티 */
val String.lastChar: Char
        get() = get(length - 1)

