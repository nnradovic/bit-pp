var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var lineString = "";

for(var i = 0; i < x.length; i++) {
    lineString += x[i];
} 

console.log(lineString);