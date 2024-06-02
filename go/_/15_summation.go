package main

import "fmt"

// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/go

// func Summation(n int) int {
// 	var a int
// 	for i := n; i >= 1; i-- {
// 		a += i
// 	}

// 	return a
// }

func Summation(n int) int {
	return n * (n + 1) / 2
}

func main() {
	fmt.Println(Summation(8)) // 36
}
