package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println(NoSpace("8 j 8   mBliB8g  imjB8B8  jl  B")) // 8j8mBliB8gimjB8B8jlB
}

// func NoSpace(x string) string {
// 	var result string
// 	for i := 0; i < len(x); i++ {
// 		if string(x[i]) != " " {
// 			result += string(x[i])
// 		}
// 	}

// 	return result
// }

func NoSpace(x string) string {
	return strings.Join(strings.Split(x, " "), "")
}
