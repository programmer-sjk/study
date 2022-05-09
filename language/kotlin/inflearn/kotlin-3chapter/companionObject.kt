class Book private constructor(val id: Int, val name: String) {
    companion object BookFactory{
        val myBook = "name"
        fun create() = Book(0, myBook)
    }
}

fun main() {
    val book = Book.create()
}