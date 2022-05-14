fun main() {
    val obj = Customer("코틀린")
    obj.fullName = "aa"
    println(obj.fullName)
}

// 기본 생성자는 코드를 가질 수 없음
class Person (val name: String) {
    constructor(name: String, parent: Person): this(name) {

    }

    constructor(): this("홍길동", Person()) {

    }
}

// 초기화는 초기화 블록 안에서 작성해야 함
class Customer(name: String) {
    var fullName = "꾸기"
    init {
        println("이름 $name")
    }
}
