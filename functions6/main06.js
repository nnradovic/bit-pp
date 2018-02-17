// Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum.The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000

"use strict"

function evenNumberSum(x, y, even) {
    var  sum = 0;
    var sumTwo = 0;
    for (var i = x; i <= y; i++) {
        if (even(i)) {
            sum += i;
        }
    }
    for ( var j = x; j <= y/2; j++){
        if (!even(j)) {
            sumTwo += j;
        }
    }
    return (sum - sumTwo)*12.5;
}
console.log(evenNumberSum(1,1000,isEven));


function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {

        return false;

    }

}
