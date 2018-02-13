var arr = [1, 2, NaN, undefined, "str", 1, 2];


function returnNumb(arr, callback) {
    var newArr = [];
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i]) === true) {
            newArr[counter] = arr[i];
            counter++
        }


    }
    return newArr;
}


function checkNum(num) {
    if (!!num === true && typeof num !== "string") {
        return true;
    }
}
var myArr = [2, 4, 5, 6, 7, 87]

console.log(returnNumb(myArr, function (param) {
    return !(param % 2);
}));