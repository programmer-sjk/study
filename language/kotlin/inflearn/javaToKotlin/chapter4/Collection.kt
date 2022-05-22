package chapter4

fun main() {
    // List<Int?>  --> list는 Null이 안되지만 요소는 NUll이 들어갈 수 있다.
    // List<Int>?  --> list가 NUll이 될 수 있으며 요소는 NULL이 될 수 없다.
    // List<Int?>? --> 둘 다 null이 될 수 있다.
}

fun map() {
    val numbers = setOf(100, 200)
    val oldMap = mutableMapOf<Int, String>()
    oldMap[1] = "MONDAY"
    oldMap[2] = "TUESDAY"

    val newMap = mapOf(1 to "MONDAY", 2 to "TUESDAY")

    for (key in oldMap.keys) {
        println(key)
        println(oldMap[key])
    }

    for ((key, value) in oldMap.entries) {
        println("$key $value")
    }
}

fun list() {
    val numbers = mutableListOf(100, 200)
    val emptyList = emptyList<Int>()
    numbers.add(300)

    println(numbers[0])

    for (number in numbers) {
        println(number)
    }

    for ((idx, value) in numbers.withIndex()) {
        println("$idx $value")
    }
}

fun array() {
    val array = arrayOf(100, 200)
    for (i in array.indices) {
        println("${i} ${array[i]}")
    }

    for ((index, value) in array.withIndex()) {
        println("${index} ${value}")
    }
}
