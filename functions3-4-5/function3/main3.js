// 3. Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

function filterFalsy(arr) {
    var arr2 = [];
    var counter = 0;
    //Postavi uslov da ako vrednosti nisu false idu u novi array
    for (let i = 0; i < arr.length; i++) {
        if (!!arr[i] !== false) {
            arr2[counter] = arr[i];
            counter++;
        }        
    }
    return arr2;
}

console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));