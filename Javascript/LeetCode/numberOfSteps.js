var numberOfSteps = function (num) {
    // create a steps variable
    // create a value with the num passed
    // loop through the num
    // on each loop increase the number of steps
    // on each loop either reduce the iterable by 1 or divide it by 2 if divisible
    // continue the loop on the remainder of the iterable
    // return the steps
    let steps = 0
    let iterable = num // 14

    if (iterable == 0) {
        return 0
    }

    for (let i = iterable; i >= 0; i--) {
        steps++

        if (iterable % 2 == 0) {
            iterable = iterable / 2
        } else if (iterable % 2 !== 0) {
            iterable = iterable - 1
        }

        i = iterable
    }

    return steps;
};

console.log(numberOfSteps(0))

console.log(0 % 2);
