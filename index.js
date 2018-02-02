var a = 25;
if (a > 9 && typeof a ==="number" && a<100) {
    var x = a % 10;
    var y = (a - x) / 10;
    console.log(x + "" + y);


} else {
    console.log('ERROR');
}