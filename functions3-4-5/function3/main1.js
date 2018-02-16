// 1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"



function strInoStr(str1, str2, position) {
    var result = "";
    //Ako nije definisana pozicija samo saberi stringove
    if (position === undefined) {
        result = str2 + str1;
    } else {
    //U novi string smestaj do unete pozicije slova
    for (let i = 0; i < position; i++) {
            result += str1[i];   
        } 
        // Umetni novu rec
        result += str2;
        //Nastavi od unete reci da ubacuje ostale stringove
        for (let j = position; j < str1.length; j++) {
            result += str1[j];
        }
    
      

    return result;
    }
}

console.log(strInoStr("My random string", "JS ",5));