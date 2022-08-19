function isPangram(str) {
    let strArr = str.toLowerCase().split('')
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')


    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < alphabets.length; j++) {
            if (strArr[i] == alphabets[j]) {
                alphabets.splice(j, 1)
            }
        }
    }

    if (alphabets.length == 0) {
        return true
    } else {
        return false
    }
}

// console.log(isPangram(""));
console.log(isPangram("The quick brown fox jumps over the lazy dog"));