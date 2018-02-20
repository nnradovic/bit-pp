// Write a function that finds the smallest element of a given array. 
// The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

function smallestEl(arr) {

    var min = Math.min.apply(null, arr);
    var last = arr.lastIndexOf(min);
    var obj = {
        minValue: min,
        minLastIndex: last
    }
    return obj;
}
console.log(smallestEl([1, 4, -2, 11, 8, 1, -2, 3]));