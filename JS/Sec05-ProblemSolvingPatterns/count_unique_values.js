function countUniqueValues(arrInt) {
    let uniqueCount = 0
    let left = 0
    let right = 1
    if(arrInt.length === 0) return 0; 
    while (right < (arrInt.length)) {
        let isEqual = arrInt[left] == arrInt[right]
        if (isEqual) {
            right++
        } else {
            uniqueCount++
            left = right
            right++
        }
    }
    uniqueCount > 0 ? uniqueCount++ : uniqueCount // após linha 5 não precisaria
    return uniqueCount
}

console.log(countUniqueValues([-2,-2,-1,0,4,4,5,5,5,6,7,7,7,7,7]))

// SOLUÇÃO DO CURSO
// function countUniqueValues(arr){
//     if(arr.length === 0) return 0;
//     var i = 0;
//     for(var j = 1; j < arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1;
// }
// countUniqueValues([1,2,2,5,7,7,99])

// Aqui ele ordena o array com os primeiros números sendo os únicos e então quando terminar ele faz o index atual do i++ (len)
// Usamos o pattern sliding window