// Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
"use strict";
function combinationOfTwo(x,number1) {
    var counter = 0;
    var string = "";
    for (let i = x; i <= number1; i++) {
        for (let j = x; j <= number1; j++) {
            if (i !== j) {
                counter++;
                string += "( " + i + ", " + j + " )\n";
            }


        }
    }

    string += counter;
    return string;
} 


console.log(combinationOfTwo(3,7));