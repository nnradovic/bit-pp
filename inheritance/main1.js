// // Another example
// var years = [1990, 1965, 1937, 2005, 1998, 2015];

// function filterOnlyFullAged(yearsArray, callback) {
//    var outputArray = [];
//    for (var i = 0; i < yearsArray.length; i++) {
//        var year = yearsArray[i];
//        outputArray.push(callback(year));
//    }
//    return outputArray;
// }

// function isFullAge(ageLimit, year) {
//    var currentYear = (new Date()).getFullYear();
//    var yearsOld = currentYear - year
//    return yearsOld >= ageLimit;
// }

// var fullAgeJapanCallback = isFullAge.bind(this, 20);
// var fullAgeUSCallback = isFullAge.bind(this, 21);
// var fullAgeEuropeCallback = isFullAge.bind(this, 18);

// var ages = filterOnlyFullAged(years, fullAgeUSCallback);

// console.log(years);
// console.log(ages);

var yearsarr = [1990, 1965,2016,2005,2015,1937];

function filterOnlyFullAged(yearsarr, callback) {
    var outputArray = [];
    for(var i=0;i<yearsarr.length;i++){
        var year = yearsarr[i];
        outputArray.push(callback(year));

    }
    return outputArray
}


function isFullAge(ageLimit, year) {
    var currentYear = new Date().getFullYear();
    var yearsOld = currentYear - year;
    return yearsOld >= ageLimit;
}
    
var europe = isFullAge.bind(this,22);
var ages = filterOnlyFullAged(yearsarr,europe)

console.log(yearsarr);

console.log(ages);
