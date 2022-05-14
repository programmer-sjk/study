fun main() {
    println(NoDataClass()) // NoDataClass@7c30a502
    println(User())        // User(name=, age=0)
    println(User("꾸기"))
    println(User("꾸기", 33))

    val olderSeo = User("꾸기", 33)
    val nowSeo = olderSeo.copy("올해의 꾸기")
    val newSeo = olderSeo.copy(age=34)
    println("$olderSeo $nowSeo $newSeo")

    // destructuring
    val(myName, myAge) = newSeo
    println("나의 이름은 $myName 나의 나이는 $myAge")
}

class NoDataClass(val name: String = "", val age: Int = 0)
data class User(val name: String = "서정국", val age: Int = 0)
