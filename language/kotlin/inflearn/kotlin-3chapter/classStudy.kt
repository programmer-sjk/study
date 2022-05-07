open class Human(val name: String = "Anonymous"){
    open fun eat() {
        println("eat something")
    }
}

class Korean: Human() {
    override fun eat() {
        println("korea eat something")
    }
}

fun main() {
    val human = Human("꾹이")
    human.eat()
    println(human.name)

    val korean = Korean()
    korean.eat()
}