// Write a function to find the median element of array.

function medianElement(arr) {
    //Proverimo broj elemenata
    if (arr.length % 2 !== 0) {
        var arrLength = arr.length - 1;
        var medianIndex = arrLength % 2;
        var medianIndex1 = (arrLength - medianIndex) / 2;
        return arr[medianIndex1]

    } else {
        return "Array ima paran broj elemenata i nema srednji element"
    }

}

console.log(medianElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));