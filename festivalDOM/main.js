
var movieList = [];
var programList = [];

//MOVIE CREATION
var movie;
function Movie(title, genre, duration) {
    this.title = title;
    this.genre = genre;
    this.duration = duration;
}
Movie.prototype.getData = function () {
    return this.title + ", " + this.genre + ", " + this.duration + " min" ;
}

//Skupljamo vrednosti title,duration,zanr
var addMovie = document.getElementsByClassName('btnaddmovie')[0]
var displayMovie = document.getElementsByTagName('display')[0];

function createMovie() {    
    var title = document.getElementById('title').value;
    var genre = document.getElementById('genre').value;
    var duration= parseInt(document.getElementById('duration').value);

        return new Movie(title,genre,duration);
        
}

//Slusamo i na dugme kreiramo movie
addMovie.addEventListener('click', function (e) {
     movie = createMovie()

    //Pravimo list item i selektujemo listu
    var listItemMovie = document.createElement('li');
    var orderListMovie = document.getElementById('movielist');

    //Dodajemo list itmeu text iz metode getData
    listItemMovie.className="list-group-item";
    listItemMovie.textContent = movie.getData();

    //Dodajemo u orderlistu napravljen listitem
    orderListMovie.appendChild(listItemMovie);

    //Pravljenje dropdowna za kreirane filmove
    var dropMovieSelect = document.getElementById('moviedrop')
    var dropMovie = document.createElement('option');
    dropMovie.textContent = movie.getData();
    dropMovieSelect.appendChild(dropMovie);
    
    //Guramo filmove u globalni array
    movieList.push(movie);

    console.log(movieList);
    
})
// PROGRAM CREATION

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
}

Program.prototype.getProgramDuration = function () {
    var programLength = 0;

    this.listOfMovies.forEach(function (movie) {
        programLength += movie.duration;
    });

    return programLength;
};

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
};

Program.prototype.getData = function () {
    var date = this.date;
    var movies = this.listOfMovies;
    var programDuration = this.getProgramDuration();
    var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

    var outputStr = dateStr + ", program duration " + programDuration + "min\n";

    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        outputStr += "\t\t" + movie.getData() + "\n";
    }

    return outputStr;
};

function createProgram() {
    var date = document.getElementById('program').value
    return new Program(date);
}

var createeProgram = document.getElementsByClassName('btncreateprogram')[0]
var displayProgram = document.getElementsByTagName('program')[0];


var program;
var listProgram;
var dropProgram;
createeProgram.addEventListener('click', function(e){

     program = createProgram();
     listProgram = document.createElement('li');
    var orderListProgram = document.getElementById('programlist');
    
    listProgram.className = "list-group-item";
    listProgram.textContent = program.getData();

    orderListProgram.appendChild(listProgram);

    //Pravljenje dropdowna za kreirane programe
    var dropProgramSelect = document.getElementById('programdrop')
    dropProgram = document.createElement('option');
    dropProgram.textContent = program.getData();
    dropProgramSelect.appendChild(dropProgram);

    // Guramo program u globalni array i dajemo index
    programList.push(program);
    var indexDropProgram = programList.length;
    dropProgram.setAttribute('value',indexDropProgram)
    
    

})
// ADD MOVIE TO PROGRAM
var addMovieToProgram = document.getElementById('addmovietoprogram');

addMovieToProgram.addEventListener('click',function(e){
    var listProgramMovie = document.createElement('li');
    listProgramMovie.textContent += movie.getData();
    listProgram.appendChild(listProgramMovie);
    



    
})
