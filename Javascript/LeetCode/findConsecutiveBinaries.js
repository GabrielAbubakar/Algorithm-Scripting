var findMaxConsecutiveOnes = function(nums) {
    // create countArr 
    // create a count variable
    // loop over the array
    // for each element check if it equals 1
    // if yes then open window and set count to 1, 
    // if no then close window push count to countArr and set count to 0
    // if end of array and window is open push count to countArr
    // return highest count in countArr



    let countArr = []
    let count = 0
    let index = 0;
    
    for (const i of nums) {
        if (i == 1 ) {
            count++
            if (index == nums.length - 1) {
                countArr.push(count)
            }
        } else if (i == 0) {
            countArr.push(count)
            count = 0
        }

        index++
    }
    
    return countArr.sort((a,b) => b - a)[0]
    // return countArr
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1,0,1,0,1,1,1,1,1,0]));
