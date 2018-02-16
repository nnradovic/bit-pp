// 5. Write a function to get the last element of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]  



function lastElement(arr, num) {
    var arr2 = [];
    var num = num || 1
    var counter = num - 1;

    for (let i = arr.length - 1; i > (arr.length - 1) - num ; i--) {
        arr2[counter] = arr[i];
        counter--;    
    }

    return arr2;
    
}


console.log(lastElement([7, 9, 0, -2], 2));