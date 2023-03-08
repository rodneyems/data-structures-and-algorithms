function maxSubarraySum(arr, step){
    if (arr.length < step) return null
    let maxSum = 0
    for (let i = 0; i < step; i++) {
        maxSum += arr[i]
    }
    let partialSum = maxSum
    for (let i = step; i < arr.length; i++) {
        partialSum += arr[i] - arr[i - step]
        if (partialSum > maxSum) maxSum = partialSum
    }
    return maxSum
}

console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2))

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null