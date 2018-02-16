// Write a function to find the maximum and minimum elements. Function returns an array.
function minimumMaximumfArr(arr) {
    var result;
    var min = arr[0];
    var max = arr[0];

    for (let i = 0; i < arr.length; i++) {

       
            if (arr[i] < min) {
                min = arr[i]
            }
            if (arr[i] > max) {
                max = arr[i]
            }

        
       
    
}
return [min,max];
}
console.log(minimumMaximumfArr([50, 30, 23, 44,]));