package chapter3


abstract class Animal(
    protected val species: String,
    protected open val legCount: Int
) {
    abstract fun move()
}

class Cat(species: String) : Animal(species, 4) {
    override fun move() {
        println("고양이가 사뿐 사뿐 걸어가~")
    }
}

class Penguin(species: String) : Animal(species, 2), Swimmable, Flyable {
    private val wingCount = 2
    override fun move() {
        println("펭귄이 움직입니다 꿱꿱")
    }

    override val legCount: Int
        get() = super.legCount + this.wingCount

    override fun act() {
        super<Swimmable>.act()
        super<Flyable>.act()
    }

    override val swimAbility: Int
        get() = 3
}
