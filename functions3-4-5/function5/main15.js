// Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********
"use strict";

function maximumArrstring(arr) {
    var max = arr[0].length;
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}


function sqr(arr) {
    //Prvo odredimo maksimalnu duzinu pojedinacnog elementa array
    var max = arr[0].length;
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i].length) {
            max = arr[i].length;
        }else{
            max
        }
       
    }
  
    var draw = "";
    // Sirina je najduzi element + 2
    var width = max +4;
    // Visina je duzina array + 2
    var height = arr.length + 2
    for (var i = 0; i < height; i++) {
        draw += "\n";
        for (var j = 0; j < width; j++) {
            if (i === 0 || i === (height - 1)) {
                draw += "*";
            } else {
                if (j === 0 || j === (width - 1)) {
                    draw += "*";
                } else {
                    if ((arr[i - 1][j - 2] === undefined) || (j === 1 && (i !== 0 || i !== arr.length))) {
                        draw += " ";
                    } else {
                        draw += arr[i - 1][j - 2];
                    }
                }
            }
        }
    }
    return draw;
}



console.log(sqr(["Ovo", "je", "samo", "jedan", "test"]));