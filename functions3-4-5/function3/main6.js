// 6. Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null] 

function arrMultiply(length, element) {
    var arr = [];
    var element = element || null;
    //Prodji zadat broj puta i smesti uneti element u array.
        for (let i = 0; i < length; i++) {
            arr[i] = element;
        }
        return arr;
    }
    
    console.log(arrMultiply(6));