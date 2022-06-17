package chapter4

fun main() {
    println(eval(Expr.Num(3)))
}

/** 봉인된 (sealed) 클래스는 클래스 외부에 자신을 상속한 클래스를 둘 수 없다 */
sealed class Expr {
    class Num(val value: Int) : Expr()
    class Sum(val left: Expr, val right: Expr) : Expr()
}

fun eval(e: Expr) : Int =
    when (e) {
        is Expr.Num -> e.value
        is Expr.Sum -> eval(e.right) + eval(e.left)
    }
