// Write a program that checks if the entered number is a prime number
// (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false

"use strict";

function primeNum(numb) {
    for (var i = 2; i <= numb; i++) {
        if (numb%i === 0){
            return false;
        }  else {
            return true;
        }
    }

}
console.log(primeNum(5555));



