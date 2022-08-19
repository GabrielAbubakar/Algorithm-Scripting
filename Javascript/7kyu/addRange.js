function getSum( a, b) {
    var sum = 0
 
    if (a != b) {
       if (a > b) {
          for (let i = b; i <= a; i++) {
             
             sum += i
             
          }
       } else if ( b > a) {
          for (let i = a; i <= b; i++) {
             sum += i
          }
       }
       
       return sum
 
    } else {
       return a
    }
 }
 
 
 console.log(getSum(-1, 2));