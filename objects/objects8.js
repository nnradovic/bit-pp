// Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"

function capitalize(str){
   
  
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("js string exercises"));
