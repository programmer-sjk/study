package others

fun main() {
    letFunction()
}

fun scopeFunction() {
    val person = Person("서정국", 33)
    val let = person.let { it.age }
    val run = person.run { this.age }
    val also = person.also { it.age }
    val apply = person.apply { this.age }

    println("let: ${let}")
    println("run: ${run}")
    println("also: ${also}")
    println("apply: ${apply}")
}

/**
 * 1. call chain 결과로 호출할 때, chain에서 forEach를 대체하는 느낌
 * 2. non-null 에 대해서만 CODE BLOCK을 실행시킬 때
 */
fun letFunction() {
    // 1
    val strings = listOf("Apple", "Car", "banana")
    strings.map { it.length }
        .filter { it > 3 }
        .let(::println)

    // 2
    var str: String? = ""
    val length = str?.let {
        it.length
    }
}

fun printPerson(person: Person) {
    person?.let {
        println(it.name)
        println(it.age)
    }
}
