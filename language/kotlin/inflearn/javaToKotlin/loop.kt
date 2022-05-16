fun main() {
    val numbers = listOf(1, 2, 3)
    for(num in numbers) {
        println(num)
    }

    println("1부터 3까지")
    for(i in 1..3) {
        println(i)
    }

    println("2씩 올라감")
    for(i in 1..5 step 2) {
        println(i)
    }

    println("3부터 1까지")
    for(i in 3 downTo 1) {
        println(i)
    }
}
