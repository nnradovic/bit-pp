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
    //Ako imamo dva filma prekini kod
    doubleCheck()
    //Ako je ovo true prekini kod
    if (validation()) {
 
        return;

    }else{
        movie = createMovie()

        //Pravimo list item i selektujemo listu
        var listItemMovie = document.createElement('li');
        var orderListMovie = document.getElementById('movielist');
    
        //Dodajemo list itmeu text iz metode getData
        listItemMovie.className = "list-group-item list-group-item-primary";
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
    }




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
     //Proveravamo da li imamo dva ista programa
     programDoubleCheck();
     //Ako je ovo true prekini kod
    if (validation()) {
        return;
    }
    
    counter++;
    program = createProgram();
    listProgram = document.createElement('li');
    var orderListProgram = document.getElementById('programlist');

    listProgram.className = "list-group-item list-group-item-primary";
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
    // Dodajemo vrednosti u drop listu da mozemo posle da selektujrmo.
    dropProgram.setAttribute('value', indexDropProgram)


})
// ADD MOVIE TO PROGRAM

var addMovieToProgram = document.getElementById('addmovietoprogram');

addMovieToProgram.addEventListener('click', function (e) {

    var programIndex = parseInt(document.getElementById('programdrop').value);
    var selectedProgram = programList[programIndex-1];
    console.log(selectedProgram);
    
    var movieIndex = parseInt(document.getElementById('moviedrop').value);
    var selectedMovie = movieList[movieIndex-1];
    console.log(selectedMovie);

   

    selectedProgram.programDuration += selectedMovie.duration;
    selectedProgram.listOfMovies++;
    
    //Selektujemo parent Node liste programa gde cemo staru opciju zameniti novom;
    var parentNode = document.getElementById('programlist');
    //Kreiramo novi Node
    var newNode = document.createElement('li');
    //Uzimamo text iz programa getData
    var newNodeText  =document.createTextNode(program.getData());
    //Ubacujemo text u elemnet
    newNode.appendChild(newNodeText);
    //Posto novi element  nema value dodajemo mu vrednost za id programIndexa koji je po redu 
    newNode.id = programIndex;
    //Samo bootstrap da bi bio lepsi
    newNode.className = "list-group-item list-group-item-danger";
   
    
    //Uzimamo postojeci programIndex i pretvaramo ga u string on ce biti id stari koji cemo zameniti
    var nodeIndex = programIndex +'';
    //Selektujemo stari node koji ima id koji je jednak postojecem programIndexu
    var oldNode = document.getElementById(nodeIndex)

     //Zameni staru node,novim
    parentNode.replaceChild(newNode, oldNode);
})


//VALIDATION
var validation = function (e) {
    var inputs = document.querySelectorAll('input');
    //Prolazimo kroz sve zahtevane inpute 
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