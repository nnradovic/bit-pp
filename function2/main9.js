var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var oddSum = 0;

function odd() {

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
          
              oddSum += arr[i];
            
        }
        
    }
    console.log(oddSum)
}

odd();