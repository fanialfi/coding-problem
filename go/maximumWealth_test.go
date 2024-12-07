package main

import (
	"runtime"
	"testing"
)

func maximumWealth(accounts [][]int) int {
	var maxWealth = 0

	for i := 0; i < len(accounts); i++ {
		wealth := 0
		for _, value := range accounts[i] {
			wealth += value
		}
		if wealth > maxWealth {
			maxWealth = wealth
		}
	}

	return maxWealth
}

var inputMaximumWealth [][]int = [][]int{{1, 2, 3}, {3, 2, 1}}
var outputMaximumWealth int = 6

func TestMaximumWealth(T *testing.T) {
	var memstatBefore, memstatAfter runtime.MemStats

	// ambil statistik memori sebelum function dijalankan
	runtime.ReadMemStats(&memstatBefore)

	result := maximumWealth(inputMaximumWealth)

	// ambil statistik memori setelah function dijalankan
	runtime.ReadMemStats(&memstatAfter)

	// hitung penggunaan memori
	memused := memstatAfter.Alloc - memstatBefore.Alloc

	if result != outputMaximumWealth {
		T.Errorf("salah, seharusnya : %d\n dan nilai kamu : %d\n", outputMaximumWealth, result)
	} else {
		T.Logf("memori digunakan : %d\n", memused)
	}
}

func BenchmarkMaximumWealth(B *testing.B) {
	for i := 0; i < B.N; i++ {
		maximumWealth(inputMaximumWealth)
	}
}
