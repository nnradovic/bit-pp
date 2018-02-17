// 1. Find the min and max element in the following array and switch their places. Print out the modified array in the console.
//    Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
//    Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
// "use strict"

// function minMaxSwitch(inputArray) {

//     var min = 0;
//     var max = inputArray[0];
//     var buffer;

//     for (let i = 0; i < inputArray.length; i++) {
//         if (inputArray[i] > inputArray[max]) {
//             max = i;
//         }
//         if (inputArray[i] < inputArray[min]) {
//             min = i; 
//         }
//     }

//     buffer = inputArray[min];
//     inputArray[min] = inputArray[max];
//     inputArray[max] = buffer;

//     return inputArray;
// }

// console.log(minMaxSwitch([3, 500, 12, 149, 53, 414, 1, 19]));
// function name(params) {

function minMaxSwitch(inputArray, maxCheck, minCheck) {
    var min = minCheck(inputArray);
    var max = maxCheck(inputArray);
    var buffer;

    buffer = inputArray[min];
    inputArray[min] = inputArray[max];
    inputArray[max] = buffer;

    return inputArray;
}

console.log(minMaxSwitch([3, 500, 12, 149, 53, 414, 1, 19], maxCheck, minCheck));

function maxCheck(inputArray) {
    var max = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] > inputArray[max]) {
            max = i;
        }
    }
    return max;
}

function minCheck(inputArray) {
var min = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] < inputArray[min]) {
            min = i;
        }
    }
    return min;
}