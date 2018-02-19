/*Write a function to alphabetize words of a given string. 
Alphabetizing a string means rearranging the letters so they are sorted from A to Z.*/

function makeAlphabet(str) {
   var newString = str.toLowerCase().split(' ');
   
   var newString1 = [];

   for(var i=0; i<newString.length; i++){
      newString1[i] = newString[i].split('').sort().join('');
     
   }
   return newString1;
   
}

console.log(makeAlphabet("My random string"));