// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16   */

function positiveSum(arr) {
    var sum = 0;
    //Svaki pozitvan broj iz arraya saberi.
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        }

    }

    return sum;

}

console.log(positiveSum([3, 11, -5, -3, 2]));
