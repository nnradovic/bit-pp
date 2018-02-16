// 2. Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function arrayCheck(arr) {
    var str = "";
    //Iskljuci sve sto nije broj ili string uslovom
    for (let i = 0; i < arr.length; i++) {
        if (isFinite(arr[i]) === true && typeof arr[i] !== "boolean" && arr[i] !== null ) {
            str += arr[i];
        }        
    }    
    return str;
}
console.log(arrayCheck([NaN, 0, 15, false, -22, '', undefined, 47, null, Infinity]));