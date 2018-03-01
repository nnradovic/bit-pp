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
    return this.title + ", " + this.genre + ", " + this.duration + " min";
}

//Skupljamo vrednosti title,duration,zanr
var addMovie = document.getElementsByClassName('btnaddmovie')[0]
var displayMovie = document.getElementsByTagName('display')[0];

function createMovie() {
    var title = document.getElementById('title').value;
    var genre = document.getElementById('genre').value;
    var duration = parseInt(document.getElementById('duration').value);

    return new Movie(title, genre, duration);

}
var dropMovie;
//Slusamo i na dugme kreiramo movie
addMovie.addEventListener('click', function (e) {
    doubleCheck()
    if (validation()) {
        return;
    }
    movie = createMovie()

    //Pravimo list item i selektujemo listu
    var listItemMovie = document.createElement('li');
    var orderListMovie = document.getElementById('movielist');

    //Dodajemo list itmeu text iz metode getData
    listItemMovie.className = "list-group-item";
    listItemMovie.textContent = movie.getData();

    //Dodajemo u orderlistu napravljen listitem
    orderListMovie.appendChild(listItemMovie);

    //Pravljenje dropdowna za kreirane filmove
    var dropMovieSelect = document.getElementById('moviedrop')
    dropMovie = document.createElement('option');
    dropMovie.textContent = movie.getData();
    dropMovieSelect.appendChild(dropMovie);

    //Guramo filmove u globalni array
    movieList.push(movie);
    var indexDropMovie = movieList.length;
    dropMovie.setAttribute('value', indexDropMovie)



})
// PROGRAM CREATION

function Program(date) {
    this.programDuration = 0;
    this.date = new Date(date);
    this.listOfMovies = 0;
}

Program.prototype.getProgramDuration = function () {


    this.listOfMovies.forEach(function (movie) {
        this.programDuration += movie.duration;
    });

    return this.programDuration;
};

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
};

Program.prototype.getData = function () {
    var date = this.date;
    var movies = this.listOfMovies;
    var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

    var outputStr = dateStr + "," + "number of Movies: " + this.listOfMovies + ", program duration " + this.programDuration + "min\n";

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
var indexDropProgram
var counter = 0;
createeProgram.addEventListener('click', function (e) {
     programDoubleCheck();
    if (validation()) {
        return;
    }
    
    counter++;
    program = createProgram();
    listProgram = document.createElement('li');
    var orderListProgram = document.getElementById('programlist');

    listProgram.className = "list-group-item";
    listProgram.id = counter;
    listProgram.textContent = program.getData();

    orderListProgram.appendChild(listProgram);

    //Pravljenje dropdowna za kreirane programe
    var dropProgramSelect = document.getElementById('programdrop')
    dropProgram = document.createElement('option');
    dropProgram.textContent = program.getData();
    dropProgramSelect.appendChild(dropProgram);

    // if (programList.hasElem(program)) {
    //     // show error
    //     return;
    // }

    // Guramo program u globalni array i dajemo index
    programList.push(program);
    indexDropProgram = programList.length;
    dropProgram.setAttribute('value', indexDropProgram)


})
// ADD MOVIE TO PROGRAM

var addMovieToProgram = document.getElementById('addmovietoprogram');

addMovieToProgram.addEventListener('click', function (e) {
    //Uzimamo index i selektujemo program iz liste sa tim indexom
    var programdropIndex = parseInt(document.getElementById('programdrop').value);
    var selectedProgram = programList[programdropIndex - 1];

    //Uzimamo index i selektujemo film iz liste sa tim indexom
    var moviedropIndex = parseInt(document.getElementById('moviedrop').value);
    var selectedMovie = movieList[moviedropIndex - 1];
    //Dodajemo programu duration pojedinacno film duration
    selectedProgram.programDuration += selectedMovie.duration;
    //Povecavamo broj filmova
    selectedProgram.listOfMovies++;

    //Kreiramo novi element
    var newNode = document.createElement("li");
    //Kreiramo text izvlacimo iz programa getData 
    var newNodeText = document.createTextNode(selectedProgram.getData());
    newNode.appendChild(newNodeText);
    //Dodeljuemo id novom nodu od programIndexa zato sto novi nod nece imati id
    newNode.id = programdropIndex;
    newNode.className = "list-group-item";
    //Selektujemo listu
    var parentNode = document.getElementById('programlist');
    console.log(parentNode);

    var nodeIndex = programdropIndex + "";
    console.log(nodeIndex);
    //Stara lista sa idejem koji je jednak programdropIndex;
    var oldNode = document.getElementById(nodeIndex);
    console.log(oldNode);
    //Zameni staru node,novim
    parentNode.replaceChild(newNode, oldNode);

    //   console.log(selectedMovie,moviedropIndex);
    //   console.log(selectedProgram,programdropIndex);


})

var validation = function (e) {
    var inputs = document.querySelectorAll('input');
    //Prolazimo kroz sve zahtevane inpute i trazimo 
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute('required') && !inputs[i].value) {
           
            return true;

        }
    }
   
    return false;

}

var doubleCheck = function () {
    var title = document.getElementById('title').value
    for(var i=0; i<movieList.length; i++){
        if(movieList[i].title == title.trim() ){
            alert('You have movie with that title')
        }
    }
}

var programDoubleCheck = function(){
    var program = document.getElementById('program').value
    var programTime = new Date(program)
    for(var i=0; i<programList.length; i++){
        if((programList[i].date.getTime()) == programTime.getTime()  ){
            alert('You have program with that date')
        }
    }
}