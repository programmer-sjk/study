package others

fun main() {

}

val number = 3
fun getNumOrNull(): Int? {
    return if (number <= 0) {
        null
    } else {
        number
    }
}

/** 주어진 조건을 만족하면 그 값이 그렇지 않으면 NULL이 반환된다. */
fun getNumOrNullV2(): Int? {
    return number.takeIf { it > 0 }
}

/** 주어진 조건을 만족하지 않으면 그 값이 만족하면 NULL이 반환된다. */
fun getNumOrNullV3(): Int? {
    return number.takeUnless { it <= 0 }
}
