// Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]


function convert(str) {

    var arr = str.split('');
    for (i = 0; i < arr.length; i++) {

        if (arr[i] === ' ') {
            arr[i] = null;
            
            console.log(arr);
         
        }
    }


}

convert('Nikola Radovic')