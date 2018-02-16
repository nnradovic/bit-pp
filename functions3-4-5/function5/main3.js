// Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]


function rotateElement(arr,k){


    var newArr =[];
    var counterArr = 0;
//Proveravamo uslov da li je index veci od array.
if(arr.length < k){
  return "Index veci od duzine array-a"
}else{
  //Ubacujemo u novi array elemente od zadatog indeksa prvo
for(j=k;j<arr.length;j++){
 
    newArr[counterArr]=arr[j]
    counterArr++;
}
//Sada ubacujemo preostale elemente odnosno prve
for(i=0;i<k;i++){

    newArr[counterArr]=arr[i];
    counterArr++;
}
return newArr;
}
    

   
   
}

console.log(rotateElement([1,2,3,4,5,6],10));


// function conArr(newArr)) {
//     // Deklarisemo prazan array u kome cemo smestati element dva array-a
//     var arr3 = [];
//     var counter = 0;
//     //Prodjem kroz prvi array dodajemo elemente u novi array povecavamo index
//     for(i=0;i<arr1.length;i++){
//        arr3[counter] = arr1[i];
//        counter++ 

//     }
//     //Nastavljamo dalje kroz drugi array i dodajemo elemente u novi array povecavamo index.
//     for(i=0;i<arr2.length;i++){
//         arr3[counter] = arr2[i];
//         counter++ 
 
//      }
//      return arr3

// }