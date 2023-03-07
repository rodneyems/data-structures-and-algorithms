function anagram(input1, input2){
    if(input1.length !== input2.length){
        return false;
    }
    let counterInput1 = {}
    let counterInput2 = {}
    for(let val of input1){
        counterInput1[val] = (counterInput1[val] || 0) + 1
    }
    for(let val of input2){
        counterInput2[val] = (counterInput2[val] || 0) + 1        
    }
    for(let key in counterInput1){
        if(!(key in counterInput2)){
            return false
        }
        if(counterInput2[key] !== counterInput1[key]){
            return false
        }
    }
    return true
}

console.log(anagram("teste", "stete"))

// SOLUÇÃO DO CURSO
// function validAnagram(first, second) {
//     if (first.length !== second.length) {
//       return false;
//     }
  
//     const lookup = {};
  
//     for (let i = 0; i < first.length; i++) {
//       let letter = first[i];
//       // if letter exists, increment, otherwise set to 1
//       lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     console.log(lookup)
  
//     for (let i = 0; i < second.length; i++) {
//       let letter = second[i];
//       // can't find letter or letter is zero then it's not an anagram
//       if (!lookup[letter]) {
//         return false;
//       } else {
//         lookup[letter] -= 1;
//       }
//     }
  
//     return true;
//   }
  
//   // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
//   validAnagram('anagrams', 'nagaramm')
// ambos utilizam a técnica de frequency_counter