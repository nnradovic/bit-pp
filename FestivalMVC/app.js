var modelModul = (function () {
/////////////////////////////CREATE MOVIE///////////////////////////////
data = {
    listOfMovies:[],
    listOfProgrmas:[]
}
//Konstruktor Movie
function Movie(title,length,genre){
    this.title = title,
    this.genre = genre,
    this.length = length
}
Movie.prototype.showMovieData = function () {
    return this.title + ", " + this.length + "min, " + this.genre;
};
//Preosledujemo objekat iz kontrolera i vadimo pojedinacne proprety
function movieCreateAdd(formMovie){
    var movie = new Movie(formMovie.title,formMovie.length,formMovie.genre);
    data.listOfMovies.push(movie);
    return movie;
}

function movieLength(){
    var fullLength =0;
    for(var i=0; i<data.listOfMovies.length; i++){
        fullLength += parseInt(data.listOfMovies[i].length)
    }
    return fullLength;
}
/////////////////////////////CREATE PROGRAM///////////////////////////////
function Program(date) {
    this.programDuration = 0;
    this.date = new Date(date);
    this.listOfMovies = 0;
}
function programCreateAdd(){
    var program = new Program()
    data.listOfProgram.push(program)
} 

// Program.prototype.getProgramDuration = function () {
//     this.listOfMovies.forEach(function (movie) {
//         this.programDuration += movie.duration;
//     });
//     return this.programDuration;
// };

// Program.prototype.addMovieToProgram = function (movie) {
//     this.listOfProgram.push(program);
// };

// Program.prototype.getData = function () {
//     var date = this.date;
//     var movies = this.listOfMovies;
//     var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

//     var outputStr = dateStr + "," + "number of Movies: " + this.listOfMovies + ", program duration " + this.programDuration + "min\n";

//     for (var i = 0; i < movies.length; i++) {
//         var movie = movies[i];
//         outputStr += "\t\t" + movie.getData() + "\n";
//     }

//     return outputStr;
// };


//////////////////Ovo je vidljivo u Controleru//////////////
return{
    movieCreateAdd:movieCreateAdd,
    movieLength:movieLength
}
})()


var viewModul = (function(){
///////////////////////////CREATE MOVIE///////////////////////////////
function getFormData(){
    var titleElement = document.querySelector('.movie-title');
    var lengthElement = document.querySelector('.movie-length');
    var genreSelectElement = document.querySelector('.genre-select');

    var title = titleElement.value;
    var length = lengthElement.value;
    var genre = genreSelectElement.value;

    //Pravimo objekat u koji smestamo vrednosti iz forme.
    var objectForm = {
        title:title,
        length:length,
        genre:genre
    }
    //getData vraca objectForm.
    return objectForm
}

function getMovieData(movie){
  return  movie.showMovieData();
}
/////////////////////////////CREATE PROGRAM///////////////////////////////
function getFullDate(){
    var dateElement = document.querySelector('.program-date');
    var date = dateElement.value;

    return date;
}



//////////////////Ovo je vidljivo u Controleru//////////////
return{
  getFormData:getFormData,
  getMovieData:getMovieData,
  getFullDate:getFullDate
}

})()



var controlerModul = (function(viewModulToControler,modelModulToControler){
////////////////////////////CREATE MOVIE/////////////////////////////////////////
// Selekt polja za ubacivanje filma.
var displayField = document.querySelector('.movie-list');
//Selekt dugmeta Create Movie.
var btnCreatMovie = document.querySelector('.create-movie');
//Selekt polja za upis ukupne duzine
var displayTotalLengthMovie = document.querySelector('.totallength');

//ANTENA!!!
btnCreatMovie.addEventListener('click', function(){

//Pozivamo metodu  getformData iz view-a.
var formMovie = viewModulToControler.getFormData()

//Pozivamo metodu movieCreateAdd iz modela ubacujemo objekat formMovie.
var movie = modelModulToControler.movieCreateAdd(formMovie);
//Pozivamo metodu iz getMovieData iz viewa i ubacujemo objekat movie.
var showMovie = viewModulToControler.getMovieData(movie);
console.log(showMovie);

//Ubacivanje filma u polje.
var newNode = document.createElement('p');
newNode.innerHTML = showMovie;
newNode.id = '1';
displayField.appendChild(newNode);

var fullLengthofMovies = modelModulToControler.movieLength()
//Ubacivanje ukupne duzine u polje.
var newNodeLength = document.createElement('p');

newNodeLength.innerHTML = fullLengthofMovies;
displayTotalLengthMovie.appendChild(newNodeLength);

    
})

/////////////////////////////CREATE PROGRAM///////////////////////////////
//Selekt dugmeta Create Movie.
var btnCreateProgram = document.querySelector('.create-program');
console.log(btnCreateProgram);

//ANTENA!!
btnCreateProgram.addEventListener('click', function(){
 

var createDate = viewModulToControler.getFullDate();
console.log(createDate);


  
})
})(viewModul,modelModul)