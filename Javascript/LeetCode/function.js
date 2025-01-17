function findIntersection(params) {
    const arr1 = params[0].split(",").map(val => val.trim())
    const arr2 = params[1].split(",").map(val => val.trim())
    let newArr = []

    // for (const i of arr1) {
    //     for (const j of arr2) {
    //         console.log(i == j);
            
    //         // if (i == j) {
    //         //     newArr.push(j)
    //         // }
    //     }
    // }

    arr1.map(item => {
        arr2.map(val => {
            if (item == val) {
                newArr.push(val)
            }
        })
    })

    if (newArr.length == 0) return false

    return newArr
    // return newArr.join(',')
}

console.log(findIntersection( ["1, 2, 3, 4, 5", "6, 7, 8, 9, 10"]))