function squareDigits(num){
    // may the code be with you
    var track = []; 
    // Seperate to different numbers
    num = num.toString().split('')

    // Loop through, convert and square each number
    for (let i = 0; i < num.length; i++) {
        
        track.push(parseInt(num[i] * parseInt(num[i])));
    }
    return parseInt(track.join(""))
    
}

console.log(squareDigits(9119));


    // let track = []
    // let numStr = number + ""
    // let numArr =  numStr.split("")
    // for (let i = 0; i < numArr.length; i++) {
    //     track.push(parseInt(numArr[i]) * parseInt(numArr[i]))
    // }
    // console.log(track);
    // return parseInt(track.join(""))