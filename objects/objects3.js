/*Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.

“Webmaster” -> “abeemrstw” */

function makeAlphabet(str) {
    var arr = str.toLowerCase().split('');
    var newString = arr.sort();
    return newString.join('');
}

console.log(makeAlphabet("Webmaster"));