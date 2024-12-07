package main

import "testing"

func runningSum(nums []int) []int {
	var result = make([]int, len(nums))
	result[0] = nums[0]

	for i := 1; i < len(nums); i++ {
		result[i] = nums[i] + result[i-1]
	}
	return result
}

var input []int = []int{1, 2, 3, 4}
var output []int = []int{1, 3, 6, 10}

func TestRunningSum(t *testing.T) {
	result := runningSum(input)
	for index, _ := range result {
		if result[index] != output[index] {
			t.Errorf("salah, harusnya : %d\nnilainya : %d\n", output[index], result[index])
		}
	}
}
