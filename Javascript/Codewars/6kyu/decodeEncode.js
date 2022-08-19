// function encode(str) {
//     //divide string to array
//     let vowels = [ 'a', 'e', 'i', 'o', 'u']
//     let strArr = str.toLowerCase().split('');
    


//     //loop through nd check if any 
//     for (let i = 0; i < strArr.length; i++) {
//         if (vowels.includes(strArr[i])) {
//             //strArr[i] == vowels.indexOf()
//             strArr[i] = vowels.indexOf(strArr[i]) + 1;
//         }
//     }

//     return strArr.join('')
// }


  
// function decode(str) {
//     //divide string to array
//     //let nums = [ '1', '2', '3', '4', '5' ]
//     let nums = [ 1, 2, 3, 4, 5 ]
//     let vowels = [ 'a', 'e', 'i', 'o', 'u']
//     let strArr = str.toLowerCase().split('');
    
    
//     //loop through nd check if any 
//     for (let i = 0; i < strArr.length; i++) {
//        // nums.includes(strArr[i])
//         if (nums[i] == strArr[i]) {
//             console.log(strArr[i]);
//             //strArr[i] == nums.indexOf()
//             //strArr[i] = nums.indexOf(strArr[i]) + 1;
            
//             strArr[i] = vowels[nums[i]];
//             //console.log(strArr[i]);
//         }
//         //console.log(strArr[i]);
//     }

//     //console.log(strArr);
    
//     return strArr.join('');
// }



// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5





function decode(str) {

    let nums = [ '1', '2', '3', '4', '5' ];
    let vowels = [ 'a', 'e', 'i', 'o', 'u'];
    let strArr = str.toLowerCase().split('');

    for (let i = 0; i < strArr.length; i++) {
        if (vowels.includes(strArr[i])) {
            
            //console.log(strArr)
        }
    }

}

//console.log(encode("hi there"));
console.log(decode("h3 th2r2"));





