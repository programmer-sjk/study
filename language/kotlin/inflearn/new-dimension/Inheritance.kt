fun main() {
    BB().f()
}

open class AA() {
    open fun test() {}
    open fun f() {
        println("AAAA")
    }
}

interface CC {
    fun f() {
        println("CCCC")
    }
}

class BB(): AA(), CC {
    override fun f () {
        super<AA>.f()
        super<CC>.f()
    }
}


open class Base {
    open fun v() {

    }
}

class Derived(): Base() {
    override fun v() {}
}
