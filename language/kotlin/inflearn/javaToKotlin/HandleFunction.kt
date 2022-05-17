fun main() {
    println(max(3, 5))
    repeat("Hello World")
    repeat("Hello World", 3)
    repeat("Hello World", 3, true)
    repeat("Hello World", useNewLine = true) // named parameter

    printNameAndAge(age=33, name="서정국")

    // 가변인자
    printAll("A", "B", "C")
    val arr = arrayOf("D", "E")
    printAll(*arr)
}

fun printAll(vararg strings: String) {
    for (str in strings) {
        println(str)
    }
}

fun printNameAndAge(name: String, age: Int) {
    println("name: ${name}, age: ${age}")
}

fun repeat(str: String, num: Int = 3, useNewLine: Boolean = true) {
    for (i in 1..num) {
        if (useNewLine) {
            println(str)
        } else {
            print(str)
        }
    }
}

fun max(a: Int, b: Int) = if (a > b) a else b
