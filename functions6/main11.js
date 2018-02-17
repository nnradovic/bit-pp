// Check if a given string is a palindrome.
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true

"use strict"

function palindrome(str) {
    var str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) !== str.charAt(str.length - 1)) {
            return false;

        }
        return true;

    }

}
console.log(palindrome("Gedeg gedeg"));