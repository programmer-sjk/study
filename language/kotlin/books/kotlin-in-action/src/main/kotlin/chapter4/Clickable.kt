package chapter4

fun main() {
    Button().click()
    Door().click()
}

interface Clickable {
    fun click()
    fun show() = println("나는 클릭할 수 있어!!")
}

interface Focusable {
    fun focus()
    fun show() = println("나는 포커스 할 수 있어!!")
}

class Button : Clickable, Focusable {
    override fun click() = println("버튼 클릭")
    override fun focus() = println("버튼 포커스")
    override fun show() {
        println("버튼 show!!!")
    }
}

open class RichButton : Clickable { // 이 클래스는 기본적으로 열려있다.
    fun disable() {}          // 이 함수는 파이널이다.
    open fun animate() {}     // 이 함수는 열려있다. 하위 클래스에서 이 메소드를 오버라이드 해도 된다.
    override fun click() {}   // 이 함수는 상위 클래스의 열려있는 메소드를 오버라이드 한다.
}

class Door : Clickable {
    override fun click() = println("자동문 클릭")
}
