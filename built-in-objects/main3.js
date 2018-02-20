// a.) Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

// b.) Write a function that counts the number of elements less than the middle element. 
// If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

/* function checkOdd(arr) {
    var result = arr.push();
    if (result % 2 === 1) {
        return true;
    } else {
        return false;
    }
}
console.log(checkOdd([1, 2, 9, 2, 1])); */
function checkOdd(arr) {
    var result = arr.push();
    if (result % 2 === 1) {
        return (result + 1) / 2;
    } else {
        return result / 2;
    }
}
console.log(checkOdd([1, 2, 9, 2, 1, 4, 3, 1]));