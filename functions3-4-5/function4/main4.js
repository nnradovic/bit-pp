// 4. Write a program that finds the second largest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2


function secLarge(arr) {
   //Postavljamo prvi clan array u dve variable navjeca i prva do najvece.
   var max = arr[0];
   var secondMax =arr[0]
   //Proveramo svaki clan array da li je veci od prvog ako jeste zauzima njegovo mesto.
   for(i=0;i<arr.length;i++){
       if(arr[i]>max){
           max = arr[i];
       }
   }
    //Proveramo svaki clan array da li je veci od prvog i da li je manji od maksimalnog.
   for(i=0;i<arr.length;i++){
       if(secondMax>arr[i] && secondMax<max){

          secondMax = arr[i];
   }

    return secondMax;
}
}

console.log(secLarge([4, 2, 2, -1, 6]));