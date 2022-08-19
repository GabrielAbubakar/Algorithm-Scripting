function removeChar(str){
    //You got this!

    if (str.length > 2) {
        
        let newVal = str.split('')
        newVal.pop()
        newVal.shift()
        return newVal.join('')

    } else {
        
        return "Word less than two characters";
    }

};

console.log(removeChar(''));

// .pop().shift().join('')