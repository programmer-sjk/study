package chapter3

fun main() {
    println(Singleton.a)
    Singleton.a += 10
    println(Singleton.a)
}

object Singleton {
    var a: Int = 0
}

class Person2 private constructor(
    var name: String,
    var age: Int
) {
    companion object Factory : Log {
        private const val MIN_AGE = 1
        fun newBaby(name: String): Person2 {
            return Person2(name, MIN_AGE)
        }

        override fun log() {
            println("나는 Person2 class 동행 객체입니다.")
        }
    }
}

interface Log {
    fun log()
}
