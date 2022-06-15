package chapter3

fun main() {
    /** 인자가 가변 */
    listOf(1, 2, 3, 4, 5)
    listOf(1, 2, 3)

    destructuring()
    parsePath("/Users/seojeong-kuk/myspace/kotlin-blackjack/test.kt")
}

fun destructuring() {
    val (name, age) = "서정국" to 33
    println("$name $age")
}

fun parsePath(path: String) {
    val directory = path.substringBeforeLast("/")
    val fullName = path.substringAfterLast("/")

    val fileName = fullName.substringBeforeLast(".")
    val extension = fullName.substringAfterLast(".")

    println("directory = ${directory}, fullName = ${fullName}")
    println("fileName = ${fileName}, extension = ${extension}")
}
