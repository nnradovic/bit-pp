// 10. Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function findFrequentItem(inputArr) {
    var maxTimeShow = 1;
    var counter = 0;
    var item;
    for (var i = 0; i < inputArr.length; i++) {
        for (var j = i; j < inputArr.length; j++) {
            //Proveravamo da li je prvi element jedanak sa drugim elementima ako jeste povecavamo brojac i tako za svaki
            if (inputArr[i] == inputArr[j]) {
                counter++;
            }
            //Ako je izbrojeni u prvom krugu veci od jedan njega smestamo u varijablu maxTimeShow i tako za svaki i uvek cuvamo najvecu vrednost
            if (maxTimeShow < counter) {
                maxTimeShow = counter;
                item = inputArr[i];
            }
        }
        counter = 0;
    }
 
    
    return "Element " + item + " se pojavljuje " + maxTimeShow + " puta "
 }
 

 console.log(findFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));