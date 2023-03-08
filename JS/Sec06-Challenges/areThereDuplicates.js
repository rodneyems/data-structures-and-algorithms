function areThereDuplicates(...inputs) {
    let numberOfOcurrencies = {}
    for (let input of inputs) {
        if (numberOfOcurrencies[input]) {
            return true
        } else {
            numberOfOcurrencies[input] = 1
        }
    }
    return false
}

console.log(areThereDuplicates(1,2,3,4,2))

// Solução proposta 1 linha

// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
// }

// function areThereDuplicates(...args) {
// // Two pointers
//     args.sort((a,b) => a > b);
//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//         if(args[start] === args[next]){
//             return true
//         }
//         start++
//         next++
//     }
//     return false
// }
