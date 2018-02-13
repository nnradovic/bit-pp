// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]


function arrStrToArrNum(arr) {
    var result = [];
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            result[counter] = parseFloat(arr[i]);
            
            counter++;
          
     
        }


    }
    return result;
}


console.log(arrStrToArrNum(["1", "21", undefined, "42", "1e+3", Infinity]));








