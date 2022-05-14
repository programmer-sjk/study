fun main() {
    val data = object {
        var x: Int = 0
        var y: Int = 0
    }

    println(data)
    println(data.x)
    println(data.y)

    println(CountManager)
    println(CountManager.count++)
    println(CountManager.count++)
    println(CountManager.count++)

    println("====================")
    println(MyClass1)
    println(MyClass1)
    println(MyClass1)
    println(MyClass2)
    println(MyClass3)
}

object CountManager {
    var count = 0
}

class MyClass {
    companion object Factory {
        fun create(): MyClass = MyClass()
    }
}

object MyClass1 {
    init {
        println("MyClass1 init")
    }
}

object MyClass2 {
    init {
        println("MyClass2 init")
    }
}

object MyClass3 {
    init {
        println("MyClass3 init")
    }
}
