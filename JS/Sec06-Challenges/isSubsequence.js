function isSubsequence(str1, str2) {
    let pointerStr1 = 0
    let pointerStr2 = 0

    while (pointerStr1 < str1.length && pointerStr2 < str2.length) {
        if (str1[pointerStr1] == str2[pointerStr2]) {
            if (pointerStr1 == str1.length-1) {
                return true
            }
            pointerStr1++
        }
        pointerStr2++
    }
    return false
}

console.log(isSubsequence("str1", "darsstr1"))

// com recursão
// function isSubsequence(str1, str2) {
//     if(str1.length === 0) return true
//     if(str2.length === 0) return false
//     if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
//     return isSubsequence(str1, str2.slice(1))
// }