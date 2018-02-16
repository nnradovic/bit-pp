// Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]   */


function deleteElement(arr,e) {
    // Deklarisemo prazan array u kome cemo smestati element dva array-a
    var arr1 = [];
    var counter = 0;
    //Prolazimo kroz sve clanove array ako clan nije jednak unetom elementu smesta se u novi arry
    for(i=0;i<arr.length;i++){
        if( arr[i] !== e){
           arr1[counter] = arr[i];
           counter++;
        }
    }
    return arr1;
}

console.log(deleteElement([4, 6, 2, 8, 2, 2],2));
