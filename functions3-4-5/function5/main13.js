// Write a function to find all the numbers greater than the average.

function averageSum(a, b, c, d) {
    var sum = 0;
    var index = arguments.length;
    var arr = [];
    var counter = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
        var average = sum / index;


    }
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > average) {
            arr[counter]=arguments[i];
            counter++
        }
        
       
    }
    return arr;





}

console.log(averageSum(1, 2, 3, 4));