// 7. Write a function that says whether a number is perfect.

// 28 -> 28 is a perfect number.

function perfectNumCheck(num) {
    var arr = [];
    var counter = 0;

    for (var i = 2; i < 10; i++) {
        //Nasli smo kako se izracunava savrsen broj na vikikpediji i primenili formulu,smestili ih u array i onda uporedjivali koji je savrsen
        arr[i - 2] = Math.pow(2, i - 1)*(Math.pow(2, i) - 1);
        if (num === arr[i-2]) {
            return true;
        } else {
            return false;
        }

    }
    // return arr;
}

console.log(perfectNumCheck(6));