// Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases, input array should be returned.


function medianElement(arr) {
    //Proverimo broj elemenata
    if (arr.length % 2 !== 0) {
        var arrLength = arr.length - 1;
        var medianIndex = arrLength % 2;
        var medianIndex1 = (arrLength - medianIndex) / 2;
        return [arr[0],arr[medianIndex1],arr[arr.length - 1]]

    } else {
        return [arr[0],arr[arr.length - 1]]
    }

}

console.log(medianElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));