// Write a program that prints a multiplication table for numbers up to 12.

'use strict';

function multiple(number) {
    var product=''; 
    for (var i = 1; i < number; i++) {


        for (var j = 1; j < number; j++) {

             product += i + ' * ' + j + " = " + i * j + '\n';

           
        }
        
    }
    return product;
}

console.log(multiple(12));




