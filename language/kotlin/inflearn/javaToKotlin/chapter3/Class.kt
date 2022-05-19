package chapter3

fun main() {
    val person = Person("서정국", 33)
    println(person.name)
    person.age = 334
    println(person.age)
}

class Person(name: String, var age: Int) {
    init {
        if (age <= 0) {
            throw IllegalArgumentException()
        }
        println("초기화 블록")
    }

    // 방법 3, backing property
    var name = name
        get() = field.uppercase()
        set(value) {
            field = value.uppercase()
        }

    val isAdult: Boolean
        get() = this.age >= 20
}

