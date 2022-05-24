package chapter4

fun main() {
    val fruits = listOf(
        Fruit("사과", 1_000),
        Fruit("사과", 1_200),
        Fruit("사과", 2_000),
        Fruit("바나나", 1_000),
        Fruit("바나나", 2_000)
    )

    // all 다음 모든 조건을 만족하면 TRUE, 아니면 FALSE
    var result = fruits.all { fruit ->  fruit.price >= 1000 }
    println(result)

    // none 은 주어진 모든 조건을 불 만족하면 TRUE, 아니면 FALSE
    result = fruits.none { fruit ->  fruit.price > 3000 }
    println(result)

    // any는  주어진 조건 중 하나라도 만족하면 TRUE
    result = fruits.none { fruit ->  fruit.price == 3000 }
    println(result)

    // count 함수는 SIZE와 동일하다
    println(fruits.size == fruits.count())

    println(fruits[0] == fruits.first())
    println(fruits[fruits.size - 1] == fruits.last())

    // 중첩 List to List
    println(listOf(listOf(1,2,3,4), listOf(5,6,7,8)).flatten())
    println(listOf(listOf(1,2,3,4), listOf(5,6,7,8)).flatMap { it })

}

