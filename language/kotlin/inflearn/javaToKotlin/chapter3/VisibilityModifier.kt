package chapter3

val a = 3

fun add(a: Int, b: Int): Int {
    return a + b
}

// 생성자에 접근 지시어를 붙이려면 contructor를 붙여야함.
class Bus private constructor()


class Car(
    internal val name: String,
    private var owner: String,
    _price: Int
) {
    var price = _price
        private set
}
