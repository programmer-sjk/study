package chapter1

fun main() {
    val num: Int = 4
    val num2: Long = num.toLong()

    val num3 = 3
    val num4 = 5
    println(num3 / num4.toDouble())

    printAgeIfPerson(Person(33))
}

fun printAgeIfPerson(obj: Any?) {
    if (obj is Person) {
        println(obj.age)
    }
}

data class Person(val age: Int) {}
