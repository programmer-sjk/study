
fun main() {
    checkSum(0)
    checkSum(2)
    checkSum(5)

}

// 함수
fun helloWorld(): Unit {
    println("Hello World")
}

fun add(x: Int, y: Int): Int {
    return x + y
}

// val vs var
fun valVSvar() {
    val a: Int = 10;
    var b: Int = 10;
    // a = 100 (X)
    b = 100;
}

// String templete
fun stringTemplte() {
    val name = "꾹이"
    println("my name is $name")
    println("my name is ${name}i'm 33")
    println("is this true ? ${1 == 0}")
    println("this is 2\$a")
}

// 조건식
fun maxBy(a: Int, b: Int): Int {
    if(a > b) {
        return a;
    } else {
        return b;
    }
}

fun maxBy2(a: Int, b: Int) = if(a>b) a else b

fun checkSum(score: Int) {
    when(score) {
        0 -> println("this is 0")
        1 -> println("this is 1")
        2,3 -> println("this is 2,3")
        else -> println("i dont know")
    }
}