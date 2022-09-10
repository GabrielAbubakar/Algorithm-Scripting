const getresults = (ops) => {

    let results = []
    let prevAdded = 0
    let total = 0

    for (let i = 0; i < ops.length; i++) {

        if (typeof ops[i] === "number") {
            results.push(ops[i])
            prevAdded = ops[i]

        } else if (ops[i] === '+') {

            results.push(ops[i - 1] + ops[i - 2])
        } else if (ops[i] === 'D') {

            results.push(prevAdded * 2)
        } else if (ops[i] === 'C') {

            results.pop()
        }
    }

    total = results.reduce((prev, current) => prev + current)

    return total
}


console.log(getresults([5, 2, "+", "D", "C"]));


