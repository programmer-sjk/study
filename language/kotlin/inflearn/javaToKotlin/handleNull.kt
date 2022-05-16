fun main() {
    /** Safe Call */
    val str: String? = "ABC"
    println(str?.length)

    /** Elvis 연산자 */
    println(str?.length ?: 0)

    startsWithA(str)
    improvedStartsWithA(str)
    startsWithA2(str)
    improvedStartsWithA2(str)
    startsWithA3(str)
    improvedStartsWithA3(str)

    /** null 아님 단언 */
    startsWith(str)
}

fun startsWith(str: String?): Boolean {
    return str!!.startsWith("A")
}

fun startsWithA(str: String?): Boolean {
    if (str == null) {
        throw java.lang.IllegalArgumentException("null이 들어왔습니다.")
    }

    return str.startsWith("A")
}

fun improvedStartsWithA(str: String?): Boolean {
    return str?.startsWith("A") ?: throw java.lang.IllegalArgumentException("null이 들어왔습니다.")
}

fun startsWithA2(str: String?): Boolean? {
    if (str == null) {
        return null
    }

    return str.startsWith("A")
}

fun improvedStartsWithA2(str: String?): Boolean? {
    return str?.startsWith("A")
}

fun startsWithA3(str: String?): Boolean {
    if (str == null) {
        return false
    }

    return str.startsWith("A")
}

fun improvedStartsWithA3(str: String?): Boolean {
    return str?.startsWith("A") ?: false
}
