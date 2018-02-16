// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function positiveElementProduct(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = arr[i] * 2   
        }        
    }

    return arr;
}

console.log(positiveElementProduct([-3, 11, 5, 3.4, -8]));