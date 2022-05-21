package chapter3

fun main() {
    val dto1 = PersonDto("서정국", 33)
    val dto2 = PersonDto("서정국", 33)
    println(dto1 == dto2)
    println(dto1)
    println(dto2)
}

data class PersonDto(
    val name: String,
    val age: Int
)

fun handleCountry(country: Country) {
    return when (country) {
        Country.KOREA -> TODO()
        Country.AMERICA -> TODO()
        Country.A -> TODO()
    }
}

enum class Country(
    private val code: String
) {
    KOREA("KO"),
    AMERICA("US"),
    A("A")
}
