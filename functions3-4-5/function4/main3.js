// 3. Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function minimumElementOfArr(arr) {
    var result;
    var min = arr[0];
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] < min) {
           min = arr[i]
       }
    
}
return min;
}
console.log(minimumElementOfArr([50, 30, 23, 44, 47]));