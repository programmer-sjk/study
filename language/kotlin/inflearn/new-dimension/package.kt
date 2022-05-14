import hi.test.printOther

fun main() {
    printOther()
    insideOfFunReturn()
    insideOfLambdaReturn()
    insideOfLambdaLabelReturn()
    insideOfLambdaImplicitLabelReturn()
}

fun insideOfFunReturn() {
    println("insideOfFunReturn")
    var ints = listOf<Int>(0, 1, 2, 3)
    ints.forEach(
        fun (value: Int) {
            if (value == 1) return
            println(value) // 0
        }
    )
}

fun insideOfLambdaReturn() {
    println("insideOfLambdaReturn")
    var ints = listOf<Int>(0, 1, 2, 3)
    ints.forEach {
        if (it == 1) return
        println(it) // 0
    }
}

fun insideOfLambdaLabelReturn() {
    println("insideOfLambdaLabelReturn")
    var ints = listOf<Int>(0, 1, 2, 3)
    ints.forEach label@ {
        if (it == 1) return@label
        println(it) // 0
    }
}
fun insideOfLambdaImplicitLabelReturn() {
    println("insideOfLambdaImplicitLabelReturn")
    var ints = listOf<Int>(0, 1, 2, 3)
    ints.forEach {
        if (it == 1) return@forEach
        println(it) // 0
    }
}

