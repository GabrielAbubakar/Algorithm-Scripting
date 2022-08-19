function repeater(string, n){
    let arr = []
    for (let i = n; i > 0; i--) {
        arr.push(string)        
    }
    
    return arr.join('')

}

console.log(repeater('g', 7));