// Both web and mobile applications should inherit methods:
// isCCLicence  which checks if the licence of the application is CC (Creative Commons) 
// like which increases the number of stars by one
// showStars which prints out the number of stars 

function Programer(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

Programer.prototype.isCClicence = function () {
    if (this.licence === 'CC') {
        return this.licence = 'Licence is Creative Cloud \n\n';
    }
}

Programer.prototype.like = function () {
    return this.stars++;
}

Programer.prototype.showStars = function () {
    return 'You now have ' + this.stars;
}
// WebApp: name, url, technologies, licence, stars
// All web applications should inherit methods: 
// getData which prints out all the information
// reactBased which checks if one of the used technologies is React

function WebApp(name, url, technologies, licence, stars) {
    Programer.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;

}
//NASLEDUJEMO OD PROGRAMERA NJEGOVE METODE STARS,LIKE,ISCC
WebApp.prototype = Object.create(Programer.prototype);
WebApp.prototype.constructor = WebApp;
//GET DATA I REACT BASED SU SAMO ZA WEB
WebApp.prototype.getData = function () {
    return this.name + ' ' + this.url + ' ' + this.technologies + ' ' + this.licence + ' ' + this.stars;
}

WebApp.prototype.reactBased = function () {
    var react;
    if (this.technologies === 'react') {
        return react = "This is devloped in React";
    } else {
        return react = "This is not devloped in React"
    }

}

var newWebApp = new WebApp('BitCoin', 'www.bitcoin.com', 'JavaScrit', 'CC', 3);

console.log(newWebApp.getData());
newWebApp.like();
newWebApp.like();
newWebApp.like();
console.log(newWebApp.getData());
console.log(newWebApp.reactBased());
console.log(newWebApp.showStars());
console.log(newWebApp.isCClicence());

// MobileApp: name, platforms, licence, stars
// All mobile applications should inherit methods:
// getData which prints out all the informations
// forAndroid which checks if one of the platforms the application is developed for is Android


function MobileApp(name, platforms, licence, stars) {
    Programer.call(this, name, licence, stars);
    this.platforms = platforms;

}
//NASLEDUJEMO OD PROGRAMERA NJEGOVE METODE STARS,LIKE,ISCC
MobileApp.prototype = Object.create(Programer.prototype);
MobileApp.prototype.constructor = MobileApp;

//GET DATA I PLATFORMA BASED SU SAMO ZA MOBILE
MobileApp.prototype.getData = function () {
    return this.name + ' ' + this.platforms +' ' + this.licence + ' ' + this.stars;
}

MobileApp.prototype.forAndroid = function () {
    var android;
    if (this.platforms === 'android') {
        return android = "This is android app";
    } else {
        return android = "This is not android app";
    }
}

var  playstore = new MobileApp('CoinMarket', 'ios' , 'CC', 1);

console.log(playstore.getData());
playstore.like();
playstore.like();
playstore.like();
playstore.like();
console.log(playstore.getData());
console.log(playstore.forAndroid());
console.log(playstore.showStars());
console.log(playstore.isCClicence());
