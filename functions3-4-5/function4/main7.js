// Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]   */


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

console.log(intertwinesArr([4, 5, 6, 2], [3, 8, 11, 9]));
