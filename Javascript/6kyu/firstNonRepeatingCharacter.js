function first_non_repeating_letter(str) {
    let strArr = str.split('')

    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < strArr.length; j++) {
            if (strArr[i] == strArr[j]) {
                return console.log(strArr[i]);
            }
        }
    }


}


first_non_repeating_letter('stress')

