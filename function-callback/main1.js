   /**
    * Take a look at this common scenario–you have a function that returns a value,
    * which you then pass to another function. In our example, the first function,
    * multiplyByTwo(), loops through passed input array, multiplies each element
    * by two, and returns an array containing the result. The second function,
    * addOne(), takes a value, adds one to it, and returns it
   */

  function multiplyByTwo(inputArray, callback) {
    var newArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        var element = inputArray[i];
        newArray[i] = element * 2;
        newArray[i] = callback(newArray[i]);
    }
    return newArray;
}

function addOne(a) {
    return a + 1;
}

// Let's test these functions:
var inputOne = [1, 2, 3];
var outputArray = multiplyByTwo(inputOne, function(a){
    return a / 2;
}) ;
console.log(outputArray); // [2, 4, 6]


// As you can see, everything works fine, but there's room for improvement.
// For example, there were two loops. Loops can be expensive if they go through
// a lot of repetitions. You can achieve the same result with only one loop.