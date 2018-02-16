
// Write a function that takes a number and returns array of its digits.

'use strict';

function arrDigit(str) {
    //Konvertujemo number to string
    var string = '"'+str+'"'
  
    
    var arrStr = [];
    var counter = 0;
    //Ubacujemo u array pojedinacni string
    for (var i = 1; i < string.length-1; i++) {
       arrStr[counter] =string[i];
       counter++;
    }
    return arrStr;

}


console.log(arrDigit(1233));
