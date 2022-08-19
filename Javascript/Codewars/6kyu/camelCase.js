function toCamelCase(str) {
    //Check if the string contains something
    if (str) {
        // Split the string into an array
        const strArr = str.split('')

        // Loop over the array
        for (let i = 0; i < strArr.length; i++) {
            // Check if any index in the array contains a "-" or a "_", if it does replace it with a empty string and capitalize the next index
            if (strArr[i] == "-" || strArr[i] == "_") {
                strArr[i] = ''
                strArr[i + 1] = strArr[i + 1].toUpperCase()
            }
        }

        // Join the array by the empty spaces and return
        return strArr.join('')
    } else {
        return "The string is empty"
    }
}















console.log(toCamelCase('the-one-day'));
console.log(toCamelCase('the_one_day'));
console.log(toCamelCase('The_Stealth_Warrior'));
console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('A-B-C'));
console.log(toCamelCase(''));