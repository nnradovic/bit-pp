
var arrayTest = [3, 4, 7, 1, 9, 18];
var product = 1;
var sum = 0;
for (var i = 0; i < arrayTest.length; i++) {

    sum += arrayTest[i];
    product *= arrayTest[i];

}

console.log(sum, product);