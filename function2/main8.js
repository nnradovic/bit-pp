
var inputNumber = 3;
var arr = [1, 2, 3, 4, 5, 2, 2, 5];
var count = 1;
var apperance;
function checkDuplicate() {

    for (i = 0; i < arr.length; i++) {

        if ((inputNumber - arr[i]) === 0) {

            var apperance = inputNumber + " se pojavljuje  " + count++;
        }

    }


    console.log(apperance + ' puta');



}

checkDuplicate();