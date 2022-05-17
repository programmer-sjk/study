fun main() {

}

fun parseIntThrow(str: String): Int {
    try {
        return str.toInt()
    } catch(e: NumberFormatException) {
        throw IllegalArgumentException("주어진 문자열은 숫자가 아닙니다")
    }
}
