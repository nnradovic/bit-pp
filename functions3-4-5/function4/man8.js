// Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]  


function conArr(arr1,arr2) {
    // Deklarisemo prazan array u kome cemo smestati element dva array-a
    var arr3 = [];
    var counter = 0;
    //Prodjem kroz prvi array dodajemo elemente u novi array povecavamo index
    for(i=0;i<arr1.length;i++){
       arr3[counter] = arr1[i];
       counter++ 

    }
    //Nastavljamo dalje kroz drugi array i dodajemo elemente u novi array povecavamo index.
    for(i=0;i<arr2.length;i++){
        arr3[counter] = arr2[i];
        counter++ 
 
     }
     return arr3

}


console.log(conArr([4, 5, 6, 2], [3, 8, 11, 9]));
