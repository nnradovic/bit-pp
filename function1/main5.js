// Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.

function occurance(str,letter) {
       
      for(var i=0;i<str.length;i++){
            
          if(str[i] === letter){
            
            console.log( 'Slovo je na ' + (i+1) + ' poziciji' )
          }else{
              console.log('-1')
              break;
          }
          
      }
 

    
}

occurance('Nikola', 'b')