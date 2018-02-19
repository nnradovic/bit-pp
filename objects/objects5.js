/* Write a function to split a string and convert it into an array of words.

    "John Snow" -> [ 'John', 'Snow' ] */
    

function makeAlphabet(str) {
   var newString = str.split(' ');
  return newString;
}
console.log(makeAlphabet("John Snow"));
