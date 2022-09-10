// function recursion(str) {
//     let newStr = str.split('').reverse().join('')
//     str = str.split(' ').join('')
//     newStr = newStr.split(' ').join('')

//     console.log(newStr.split(' ').join(''));
//     console.log(str);

//     if (str == newStr) {
//         console.log('same');
//     } else {
//         console.log('different');
//     }


//     // return newStr
// }

// console.log(recursion('never odd or even'));



// for(var i = 0; i < 3; i++) {
//     setTimeout(function() { console.log(i); }, 1000)
// }

// (function name(params) {
//     var a = b = 5
// })()

// console.log(b);

function Searching(str) {
    str = str.split('')
    let int = parseInt(str[0])

    for (let i = 1; i < str.length; i++) {
        // console.log(str[i]);

    }



    return str
}

console.log(Searching('3aabacbebebe'));