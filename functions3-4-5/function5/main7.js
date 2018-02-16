// Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

function minimumElementOfArr(arr) {
    var result;
    var max = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if(typeof arr[i] === 'number' &&  isNaN(arr[i]) === false && isFinite(arr[i]) === Infinity && typeof arr[i] === 'string' ){
            if (arr[i] < max) {
                max = arr[i]
            }
        } 
       
    
}
return max;
}
console.log(minimumElementOfArr([50, 30, 23, 44, NaN,Infinity,'sasa']));