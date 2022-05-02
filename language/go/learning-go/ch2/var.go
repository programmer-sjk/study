package ch2

import "fmt"

// 변수를 선언하는 다양한 방법
func main() {
	var integerVar int = 10
	var integerVar2 = 20
	var x, y int = 10, 20
	var a, b = 10, "hello"
	c, d := 20, "hello"
	fmt.Println(integerVar, integerVar2)
	fmt.Println(x, y, a, b, c, d)
}
