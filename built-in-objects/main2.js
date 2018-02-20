// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

function remove(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
         newArr.push(arr[i]);
        }
    }
    return newArr.sort((a, b) => a - b);
}
console.log(remove([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));