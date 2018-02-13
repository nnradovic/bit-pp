// Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

function lastOcc(str,letter) {
    
    for(var i=0;i<str.length;i++){
  
        if(str[i] === letter){
         
            console.log('Poslednje pojavljivanje slova ' + letter + ' je na ' + i + ' mestu');
           
  
       
        }else{
            console.log('-1')
           
            
        }
        
    }


  
}

lastOcc('Nikolai', 'l')


