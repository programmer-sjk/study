
fun main() {
    nullCheck()
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

    when(score) {
        in 90..100 -> println("you are genius")
        in 10..80 -> println("you need genius")
        else -> println("okay")
    }
}

// array vs list
fun array() {
    val arr = arrayOf(1,2,3)
    val list = listOf(1,2,3)
    arr[0] = 10;
    // list[0] = 10; (x) cause immutable

    val arrList = arrayListOf<Int>()
    arrList.add(1)
    arrList.add(2)
}

// for
fun forFun() {
    val names = arrayListOf<String>("꾸기", "차밍", "우주", "라비", "리온")
    for(name in names) {
        println(name)
    }

    for((index, name) in names.withIndex()) {
        println("${index+1}학생의 이름은 ${name}")
    }

    var sum: Int = 0;
    for(i in 1..10) {
        sum += i
    }
    println(sum)

    for(i in 1 until 5) {
        println("5보다 작은 4까지 돔")
    }
}

// nullable or non-null
fun nullCheck() {
    var name: String = "꾸기"
    var nullName: String? = null;

    var upperName = name.uppercase()
    var upperNullName = nullName?.uppercase()

    // ?:
    var lastName: String? = null
    var fullName = "${name} ${lastName ?: "noName"}"
    println(fullName)
    lastName = "서"
    fullName = "${name} ${lastName ?: "noName"}"
    println(fullName)

    //!!
    
}