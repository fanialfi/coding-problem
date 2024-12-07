package main

import (
	"fmt"
	"reflect"
	"runtime"
	"strconv"
	"testing"
)

// fizzBuzz using if else
func fizzBuzz(n int) []string {
	fizzBuzz := make([]string, n)

	for i := 1; i <= n; i++ {
		if (i)%3 == 0 && (i)%5 == 0 {
			fizzBuzz[i-1] = "FizzBuzz"
		} else if (i)%3 == 0 {
			fizzBuzz[i-1] = "Fizz"
		} else if (i)%5 == 0 {
			fizzBuzz[i-1] = "Buzz"
		} else {
			fizzBuzz[i-1] = strconv.Itoa(i)
		}
	}

	return fizzBuzz
}

var inputFizzBuzz map[int][]string = map[int][]string{
	3:  {"1", "2", "Fizz"},
	5:  {"1", "2", "Fizz", "4", "Buzz"},
	15: {"1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"},
}

func TestFizzBuzz(T *testing.T) {
	var memstatBefore, memstatAfter runtime.MemStats

	for index, value := range inputFizzBuzz {
		// ambil statistik memori sebelum task dijalankan
		runtime.ReadMemStats(&memstatBefore)

		result := fizzBuzz(index)

		// ambil statistik memori sesudah task dijalankan
		runtime.ReadMemStats(&memstatAfter)

		if reflect.DeepEqual(value, result) {
			T.Logf("Kedua result sama\n\tresult expected : %#v\n\tresult function : %#v\n", value, result)
		} else {
			T.Errorf("Kedua result beda\n\tresult expected : %#v\n\tresult function : %#v\n", value, result)
		}

		memusage := memstatAfter.Alloc - memstatBefore.Alloc
		fmt.Println("memory usage", memusage)
	}
}

func BenchmarkFizzBuzz(B *testing.B) {
	for i := 0; i < B.N; i++ {
		for index := range inputFizzBuzz {
			fizzBuzz(index)
		}
	}
}
