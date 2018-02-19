// Write a function to convert a string to its abbreviated form. 

// 	"John Snow" -> 	"John S."


function makeAlphabet(str) {
    var newString = str.split(' ');
    var abb = newString[1][0]+"."
   return newString[0] + ' ' + abb;
 }
 console.log(makeAlphabet("John Snow"));
 