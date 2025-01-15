function findOdd(n) {
    //happy coding!
    // if length of array is 1, return the value of the array
    // if it is more then loop over the array

    if (n.length === 1) {
        return n[0]
    }

    const obj = {}

    for (let i = 0; i < n.length; i++) {
        if (obj.hasOwnProperty(n[i])) {
            obj[n[i]] += 1
        } else {
            obj[n[i]] = 1
        }
    }


    return Object.keys(obj).find(key => obj[key] % 2 !== 0) * 1;
}