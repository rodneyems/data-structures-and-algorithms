function sameFrequency(num1, num2){
    if (num1.toString().length != num2.toString().length) {
        return false
    }

    let map1 = {}
    let map2 = {}
    for (let number of num1.toString()) {
        map1[number] = (map1[number] || 0) + 1
    }

    for (let number of num2.toString()) {
        map2[number] = (map2[number] || 0) + 1
    }

    for (let key in map1) {
        if(!(key in map2)){
            return false
        }
        if(map2[key] != map1[key]){
            return false
        }
    }
    return true
}

console.log(sameFrequency(34,14))