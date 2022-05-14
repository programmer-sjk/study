fun main() {
    val obj = Address()
    println(obj.isEmpty)
}

class Address {
    var name: String = "Kotlin"
        get() { return field + "!!!" }
        set(value) { field = value }

    val isEmpty: Boolean = false
        get() { return field }
}
