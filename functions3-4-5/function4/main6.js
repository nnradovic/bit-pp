// Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.  */


function symetricArr(arr) {
    //Uzmi posledni index array.
    var arrL = arr.length - 1

    for (i = 0; i < arr.length; i++) {
        //Prodji kroz sve clanove array ako je prvi jednak zadnjem i tako nadalje arrry je simetrican.
        if (arr[0 + i] !== arr[arrL - i]) {

            return "Array not symetric"
            break;

        }
          
    }  return "Array is symetric"


}

console.log(symetricArr([2, 4, -2, 7, -2, 4, 2]));


