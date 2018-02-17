// "4. Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
//    Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
//    Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
"use strict"

function sortArray(inputArray, callback) {
    var sortedArray = [];
    sortedArray = inputArray.sort(function (a, b) {
        return a - b
    });
    for (var i = 0; i < sortedArray.length; i++) {
        sortedArray[i] = callback(sortedArray[i]);
    }
    return sortedArray;
}

console.log(sortArray([13, 11, 15, 5, 6, 1, 8, 12], multiple));

function multiple(inputArray) {

    return inputArray * 2;
}