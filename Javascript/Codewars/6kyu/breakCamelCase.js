function solution(str) {
    // Split the string into an array
    strArr = str.split('')

    //Loop over the string array
    for (let i = 0; i < strArr.length; i++) {
        // Check if the current index is in uppercase if it is add a space before it
        if (strArr[i] == strArr[i].toUpperCase()) {
            strArr[i] = ` ${strArr[i]}`
        }
    }

    return strArr.join('');
}


console.log(solution('camelCaseUp'));
console.log(solution('identifier'));
console.log(solution(''));