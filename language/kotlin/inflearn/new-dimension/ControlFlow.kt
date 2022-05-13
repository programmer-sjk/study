fun main() {
    ifElse()
    whenStatement()
    collectionExample()
    forWithIndex()
}

fun forWithIndex() {
    val array = arrayOf("가", "나", "다")
    for(i in array.indices) {
        println("index: ${i}, value: ${array[i]}")
    }

    for((idx, value) in array.withIndex()) {
        println("index: ${idx}, value: ${value}")
    }
}

fun collectionExample() {
    println("collectionExample")
    val collection = listOf(1, 2, 3, 4, 5)
    collection.iterator()
    for(item in collection)
        println(item)
}

fun whenStatement() {
    var grade = when(50) {
        100 -> "A"
        90 -> "B"
        else -> "F"
    }
    println(grade)

    var comma = when(1) {
        0, 1, 2 -> println("this is 0 or 1 or 2")
        else -> println("else")
    }
    println(comma)
}

fun ifElse() {
    var a = 4
    var b = 5
    val max = if (a > b) a else b
    println(max)

    val min = if (a > b) {
        b
    } else {
        a
    }
    println(min)
}
