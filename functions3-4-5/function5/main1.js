// Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.

"use strict" 


function convertStringToArray(string) {
    var newArr = []
    var newArrIndex = 0

    for(var i = 0; i< string.length; i++) {
        newArr[newArrIndex] = string[i]
        newArrIndex++
    }

    return newArr
}

var vowels = ["a", "e", "i", "o", "u"]
var arr = convertStringToArray("nekarec")

function findCharsInString(arrayToSearch, charsToSearchFor) {
    var counter = 0
    for(var i = 0; i < arrayToSearch.length; i++) {
        for (var j = 0; j < charsToSearchFor.length; j++ ) {
            var elementToSearch = charsToSearchFor[i]
            if(arrayToSearch[i] === charsToSearchFor[j]) {
                counter++
            }
        }
    }
    return counter
}

console.log(findCharsInString(vowels, arr));

