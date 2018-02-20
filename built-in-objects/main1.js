/* Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1] */

function duplicate(arr) {
    var newArr = [];
 
    

    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        newArr.push(element, element);
    }
    return newArr;


}
console.log(duplicate([2, 4, 7, 11, -2, 1]));