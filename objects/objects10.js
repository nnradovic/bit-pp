// Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//        var LOWER = 'abcdefghijklmnopqrstuvwxyz';


function convert(str) {
    var newString = str.split('');
    
    var newString1 = [];
    var counter = 0;
    for (var i = 0; i < newString.length; i++) {
        if (newString[i] === newString[i].toUpperCase()) {
            newString[i] = newString[i].toLowerCase();
           
        }else{
            newString[i] = newString[i].toUpperCase();
        }
    }
    return newString;


}



console.log(convert('The Quick Brown Fox'));