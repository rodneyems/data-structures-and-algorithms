package main

import "fmt"

func main() {
	fmt.Println(solution([]int{3, 2, 4}, 6))    // true
	fmt.Println(solution([]int{3, 2, 4}, 8))    // false
	fmt.Println(solution([]int{3, 2, 4}, 10))   // false
	fmt.Println(solution([]int{4, 3, 2, 4}, 8)) // true
}

// func solution(arrInt[]int, target int) bool {
// 	for i := 0; i < len(arrInt); i++ {
// 		for j := 0; j < len(arrInt); j++ {
// 			if i == j {
// 				continue
// 			}
// 			if (arrInt[i] + arrInt[j]) == target {
// 				return true
// 			}
// 		}
// 	}
// 	return false
// }

func solution(arrInt []int, target int) bool {
	numbersArr := make(map[int]bool)

	for i := 0; i < len(arrInt); i++ {
		desiredNumber := target - arrInt[i]
		_, exists := numbersArr[desiredNumber]
		if exists {
			return true
		} else {
			numbersArr[arrInt[i]] = false
		}
	}
	return false
}
