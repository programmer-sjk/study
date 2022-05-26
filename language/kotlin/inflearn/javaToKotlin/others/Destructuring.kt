package others

fun main() {
    val person = Person("서정국", 100)

    //val (name, age) = person
    val name = person.component1()
    val age = person.component2()
    println("$name $age")


    val personWith = PersonWithComponent("서정국", 33)
    val (name2, age2) = personWith
    println("$name2 $age2")

}

data class Person(val name: String, val age: Int)
class PersonWithComponent(private val name: String, private val age: Int) {
    operator fun component1(): String {
        return this.name
    }

    operator fun component2(): Int {
        return this.age
    }
}
