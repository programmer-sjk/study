fun main() {
    // underscore numberic
    val oneMillion = 1_000_000
    val creditCardNumber = 1234_5678_9012_3456L

    println(oneMillion)
    println(creditCardNumber)

    var a: Int = 10000
    var b: Int = 10000
    var c: Int? = 10000
    println("a === b: ${a === b}")
    println("a == b: ${a ===b}")
    println("a == c: ${a ===c}")
    println("a == c: ${a ===c}")

    // 작은 타입은 큰 타입의 하위 타입이 아님. 즉 작은 타입에서 큰 타입으로 대입이 안됨
    val i: Int = 1
    // val l: Long = i   << 오류
    val l: Long = i.toLong()

    // raw string
    val s = """"'이것은 코틀린의 raw String 입니다.'""""
    println(s)

}

