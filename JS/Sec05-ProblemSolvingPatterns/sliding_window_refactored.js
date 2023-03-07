function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
  maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

  // basicamente aqui somamos os 3 primeiros, porém não precisamos mais somar 3 depois do segundo item. Basta subtrairmos o primeiro elemento e somarmos um depois
  // exemplo: 
  // 2,6,9 = 17
  // 6,9,2 = 17
  // 9,2,1 = 12
  // aqui vimos que a unica coisa que mudou foi, 17 - 6 + 1 = 12. Isso para uma sequência de 3 números, parece bobeira, mas se fosse uma sequência de 10 números,
  // não precisariamos fazer a soma em cima de 10 novos números, apenas subtrairíamos o item "0" e acrescentaríamos o item "10"