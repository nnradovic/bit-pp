// 8. Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"

function findWord(str, word) {

    var str2 = "";
    var arr = [];
    var counter = 0;
    var counter2 = 0;

    for (let i = 0; i < str.length; i++) {
        //Ako dodjes do blank napravi string i smesti ga u novi array
        if (str[i] !== " ") {
            str2 += str[i];
        } else {
            arr[counter] = str2;
            counter++;
            str2 = "";
        }
    }
    arr[counter] = str2;
    console.log(arr);
    //Proveri da li se pojavljuje u array uneta rec ako da povecaj brojac
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == word) {
            counter2++;
        }
    }
    return "the word was found " + counter2 + " times!";
}

console.log(findWord('The quick brown fox fox', "fox" ));