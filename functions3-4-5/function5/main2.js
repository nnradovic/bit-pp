// Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

function intertwinesArr(arr1,arr2) {
    // Deklarisemo prazan array u kome cemo smestati element dva array-a
    var arr3 = [];
    var counter = 0;
    // Prolazimo kroz jedan od array posto imaju isti broj clanova dodajemo prvi clan prvog arraya povecavo index za jedan, dodajemo prvi clan iz drugog arraya povecavo index za jedan.
    for(i=0;i<arr1.length;i++){
       arr3[counter] = arr1[i]
       counter++;
       arr3[counter] = arr2[i];
       counter++;
    }
    return arr3;

}



console.log(intertwinesArr(["a","b","c"], [1,2,3]));


