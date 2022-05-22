package chapter4

fun main() {
    val fruits = listOf(
        Fruit("사과", 1_000),
        Fruit("사과", 1_200),
        Fruit("사과", 2_000),
        Fruit("바나나", 1_000),
        Fruit("바나나", 2_000)
    )

    val isApple = fun (fruit: Fruit) : Boolean {
        return fruit.name == "사과"
    }

    val isApple2 = { fruit: Fruit -> fruit.name == "사과" }

    isApple(fruits[0])
    isApple.invoke(fruits[0])

    filterFruits(fruits, isApple2)
    /** 익명함수가 마지막 파리미터에 위치할 경우, 아래와 같이 호출이 가능*/
    filterFruits(fruits) { fruit: Fruit -> fruit.name == "사과" }
    /** it 으로 인자 선언없이 가능 */
    val apples = filterFruits(fruits) { it.name == "사과" }
    println(apples.forEach { println(it.name) })

}

private fun filterFruits(
    fruits: List<Fruit>, filter: (Fruit) -> Boolean
): List<Fruit> {
    val results = mutableListOf<Fruit>()

    for (fruit in fruits) {
        if (filter(fruit)) {
            results.add(fruit)
        }
    }

    return results
}

class Fruit(val name: String, val price: Int)
