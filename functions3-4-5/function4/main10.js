// Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8] 


function insertElement(arr, position, value) {
    // Deklarisemo prazan array 
    var arr1 = [];
    var counter = 0;
   //Pravimo u prvom prolazu array do zadate pozicije i dodajemo jos na zadata poziciju zadatu vrednost
    for (i = 0; i < position; i++) {
        arr1[counter] = arr[i];
        counter++;
        arr1[position] = value;

    }
    //Dodajemo u novi array elemente zadatog array od zadate pozicije
    for (i = position; i < arr.length; i++) {

        arr1[i] = arr[position]
        position++;
    }

    return arr1;


}


console.log(insertElement([2, -2, 33, 12, 5, 8], 3, 78));
