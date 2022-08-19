function toInteger(romanNum) {
    // complete the solution by transforming the 
    // string roman numeral into an integer.

    // Split the roman numeral into array containing each character.
    let romanArr = romanNum.toUpperCase().split('')

    //Create key value pairs for all roman numerals.
    let keys = [
        { letter: "I", value: 1 },
        { letter: "V", value: 5 },
        { letter: "X", value: 10 },
        { letter: "L", value: 50 },
        { letter: "C", value: 100 },
        { letter: "D", value: 500 },
        { letter: "M", value: 1000 },
    ]

    //Create a new array to store the integers of the characters in order.
    let newRomanArr = []

    // Create a sum of the roman numerals.
    let totalSum = 0

    // Loop through the roman numeral array and check if any value corresponds with any value in the keys return in newRomanNum arr if it does.
    for (let i = 0; i < romanArr.length; i++) {
        for (let j = 0; j < keys.length; j++) {
            if (romanArr[i] == keys[j].letter) {
                newRomanArr.push(keys[j].value)
            }
        }
    }



    // Loop through the interger array and check if the current value is more than or equal to the next, if it is add to total if it isnt subtract from total, if it is the last check if it has already been added by conditional 2, if it hasnst add it.
    for (let i = 0; i < newRomanArr.length; i++) {
        if (newRomanArr[i] >= newRomanArr[i + 1]) {
            totalSum += newRomanArr[i]
        } else if (newRomanArr[i] < newRomanArr[i + 1]) {
            totalSum += newRomanArr[i + 1] - newRomanArr[i]
            i += 1
        } else if (newRomanArr[i] == newRomanArr[newRomanArr.length - 1]) {
            totalSum += newRomanArr[i]
        }
    }


    return totalSum
}

console.log(toInteger('MCMXC'));
console.log(toInteger('MCMXCIV'));
console.log(toInteger('XI'));
console.log(toInteger('MDCLXVI'));
console.log(toInteger('MDCLXIV'));
console.log(toInteger('MMVIII'));
console.log(toInteger('IV'));
console.log(toInteger('I'));