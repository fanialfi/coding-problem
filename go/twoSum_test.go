package main

import (
	"fmt"
	"testing"
)

// using brute force
// func twoSum(nums []int, target int) []int {
// 	for i := 0; i < len(nums); i++ {
// 		// untuk isi variabel j saya isi i + 1
// 		// untuk memeriksa element hanya setelah element element indeks i
// 		// untuk menghindari pengulangan pasangan
// 		// dan double pengecekan
// 		for j := i + 1; j < len(nums); j++ {
// 			if nums[i]+nums[j] == target {
// 				return []int{i, j}
// 			}
// 			continue
// 		}
// 	}
// 	return []int{}
// }

// using hash map
func twoSum(nums []int, target int) []int {
	hashMap := make(map[int]int)

	for i, num := range nums {
		complement := target - num

		if j, found := hashMap[complement]; found {
			return []int{j, i}
		}
		hashMap[num] = i
	}

	return []int{}
}

var testCaseTwoSum map[int][]int = map[int][]int{
	9:  {2, 7, 11, 15},
	6:  {3, 2, 4},
	10: {2, 5, 5, 11},
}

func TestTwoSum(T *testing.T) {
	for index, value := range testCaseTwoSum {
		result := twoSum(value, index)
		fmt.Println(result)
	}
}
