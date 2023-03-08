function averagePair(arr, avg){
    let left = 0
    let right = arr.length-1

    while(left < right) {
        let partialAvg = arr[left] + arr[right] / 2
        if (partialAvg == avg) return true
        if (partialAvg > avg) right--
        if (partialAvg < avg) left++
    }
    return false
    
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],8))