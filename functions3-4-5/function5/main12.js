// Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

function averageSum(a,b,c){
   var sum =0;
   var index = arguments.length;
    for(var i=0; i<arguments.length;i++){
        sum += arguments[i];
    }
   

   return sum/index;


}

console.log(averageSum(1,2,3));


