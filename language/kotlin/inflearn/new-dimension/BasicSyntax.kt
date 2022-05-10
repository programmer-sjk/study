fun main() {
    println(maxBy(1,2))
    println(maxBy(2,20))
    collection()
}

fun maxBy(a: Int, b: Int) = if (a > b) a else b

fun collection() {
    val fruits = listOf("banana", "apple", "strawberry", "kiwi")
    fruits.sortedBy { it }.map { it.uppercase() }.forEach{ it -> println(it) }
}
