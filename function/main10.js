var inputLetter = 'A';
var arr = ['a', 'b', 'c', 'd', 'A', 'a'];
var count = 1;
var apperance;
function checkDuplicate() {

    for (i = 0; i < arr.length; i++) {

        if (inputLetter.toLowerCase() === arr[i].toLowerCase()) {

            var apperance = inputLetter + " se pojavljuje  " + count++;
        }

    }


    console.log(apperance + ' puta');



}

checkDuplicate();