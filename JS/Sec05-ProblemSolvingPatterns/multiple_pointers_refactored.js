function sumZero(arrInput){
    let left = 0;
    let right = arrInput.length - 1;

    while(left < right) {
        let sum = arrInput[left] + arrInput[right]
        if (sum == 0) {
            return [arrInput[left], arrInput[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++
        }
    }
}

console.log(sumZero([-4, -3, -2,-1, 0, 1, 2, 3, 10]))