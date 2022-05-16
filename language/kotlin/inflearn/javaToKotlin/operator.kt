fun main() {
    equalAndSameOperator()

    // Lazy 연산, fun1이 true, 따라서 fun2는 실행하지 않는다
    if (fun2() && fun1()) {
        println("aaaa")
    }
}

fun fun1(): Boolean {
    println("fun 1")
    return true
}

fun fun2(): Boolean {
    println("fun 2")
    return false
}

fun equalAndSameOperator() {
    /**
     * 동등성: 두 객체의 값이 같은가?
     * 동일성: 두 객체가 같은가? 즉 주소가 같은가?
     */
    val m1 = money(1)
    val m2 = m1
    val m3 = money(1)

    println(m1 === m3) // 주소는 다르므로 false
    println(m1 == m3) // 값이 같아서 true
}

data class money(val m: Int)
