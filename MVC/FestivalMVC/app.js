////MODEL////
var modelModul = (function () {
    /////////////////////////////CREATE MOVIE///////////////////////////////
    data = {
        listOfMovies: [],
        listOfProgrmas:[]
    }
    //Konstruktor Movie
    function Movie(title, length, genre) {
        this.title = title,
            this.genre = genre,
            this.length = length
    }
    Movie.prototype.showMovieData = function () {
        return this.title + ", " + this.length + "min, " + this.genre;
    };
    //Preosledujemo objekat iz kontrolera i vadimo pojedinacne proprety
    function movieCreateAdd(formMovie) {
        var movie = new Movie(formMovie.title, formMovie.length, formMovie.genre);

        data.listOfMovies.push(movie);
        console.log(data.listOfMovies);
        
        return movie;
    }

    function movieLength() {
        var fullLength = 0;
        for (var i = 0; i < data.listOfMovies.length; i++) {
            fullLength += parseInt(data.listOfMovies[i].length)
        }
        return 'Total length of movies ' + fullLength + 'min';
    }
    //Kreiranje elemenata za ukupnu duzinu
    function appendItemLength(item, htmlElement, parent) {
        var element = document.createElement(htmlElement);
        element.textContent = item.movieLength()
        parent.appendChild(element);
    }

    //Item je Program,html je koji node hoces da apendujes,kome hoces.
    var counterMo = 0;

    function appendItemMovie(item, htmlElement, parent) {
        var element = document.createElement(htmlElement);
        element.textContent = item
        //set value of option field
        if (htmlElement == "option") {
            counterMo++;
            element.value = counterMo;
        }
        parent.appendChild(element);
    }
    /////////////////////////////CREATE PROGRAM///////////////////////////////
    function Program(date1) {
        this.programDuration = 0;
        this.date =date1;
        this.listOfMovies = 0;
    }

    function programCreateAdd(date1) {
        var program = new Program(date1);
        console.log(program);
        // console.log(data.listOfPrograms);
        
        data.listOfProgrmas.push(program)
        return program;
    }

    //Item je Program,html je koji node hoces da apendujes,kome hoces.
    var counterPr = 0;

    function appendItem(item, htmlElement, parent) {
        var element = document.createElement(htmlElement);
        element.textContent = item.getFullDate();
        //set value of option field
        if (htmlElement == "option") {
            counterPr++;
            element.value = counterPr;
        }
        parent.appendChild(element);
    }

    Program.prototype.getProgramLength = function () {
        var programLength = 0;
        for(var i=0; i< listOfProgrmas.length;i++){
            programLength += listOfProgrmas[i].program
        }
        return programLength;
    };
    ////////////////////////ADD MOVIE TO PROGRAM /////////////////////////////


     function addMovieToProgram() {
         var dropDownProgram = document.querySelector('.program-select');
        var indexArrofProgram = parseInt(dropDownProgram.getAttribute('value')+1);
    
        console.log(indexArrofProgram);
         console.log(data.listOfProgrmas);
         console.log(data.listOfPrograms[1]);
         
         data.listOfPrograms[indexArrofProgram]


        // var movieList = data.listOfMovies.length;

       
        // var outputStr = ''
        // outputStr = "number of Movies: " + movieList + program.getProgramLength();
        
        // for (var i = 0; i < data.listOfMovies.length; i++) {
        //     var singleMovie = data.listOfMovies[i];
        //     outputStr += "\t\t" + singleMovie.showMovieData() + "\n";
        // }
        // return outputStr;
    };


    //////////////////Ovo je vidljivo u Controleru//////////////
    return {
        movieCreateAdd: movieCreateAdd,
        programCreateAdd:programCreateAdd,
        movieLength: movieLength,
        appendItem: appendItem,
        appendItemLength: appendItemLength,
        appendItemMovie: appendItemMovie,
        addMovieToProgram:addMovieToProgram
        
    }
})()

////VIEW////
var viewModul = (function () {
    ///////////////////////////CREATE MOVIE///////////////////////////////
    function getFormData() {
        var titleElement = document.querySelector('.movie-title');
        var lengthElement = document.querySelector('.movie-length');
        var genreSelectElement = document.querySelector('.genre-select');

        var title = titleElement.value;
        var length = lengthElement.value;
        var genre = genreSelectElement.value;

        //Pravimo objekat u koji smestamo vrednosti iz forme.
        var objectForm = {
            title: title,
            length: length,
            genre: genre
        }

        //getData vraca objectForm.
        return objectForm
    }

    function getMovieData(movie) {
        return movie.showMovieData();
    }
    /////////////////////////////CREATE PROGRAM///////////////////////////////
    function getFullDate() {
        var dateElement = document.querySelector('.program-date');
        var date = new Date(dateElement.value);
         var fullDate = date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
         return fullDate;
    }



    //////////////////Ovo je vidljivo u Controleru//////////////
    return {
        getFormData: getFormData,
        getMovieData: getMovieData,
        getFullDate: getFullDate
    }
    ////////////////////////ADD MOVIE TO PROGRAM /////////////////////////////

})()


////CONTROLER////
var controlerModul = (function (viewModulToControler, modelModulToControler) {
    ////////////////////////////CREATE MOVIE/////////////////////////////////////////

    var btnCreatMovie = document.querySelector('.create-movie');
    var displayField = document.querySelector('.movie-list');
    var displayTotalLengthMovie = document.querySelector('.totallength');
    var firstParagraph;

    btnCreatMovie.addEventListener('click', function () {
        firstParagraph = displayTotalLengthMovie.querySelector('p')
        displayTotalLengthMovie.removeChild(firstParagraph);
        var dropDownMovieList = document.querySelector('.movie-select');

        //Pozivamo metodu  getformData iz view-a.
        var formMovie = viewModulToControler.getFormData()

        //Pozivamo metodu movieCreateAdd iz modela ubacujemo objekat formMovie.
        var movie = modelModulToControler.movieCreateAdd(formMovie);

        //Pozivamo metodu iz getMovieData iz viewa i ubacujemo objekat movie.
        var showMovie = viewModulToControler.getMovieData(movie)

        //Ubacivanje filma u polje i padajuci meni.
        modelModul.appendItemMovie(showMovie, 'p', displayField)
        modelModul.appendItemMovie(showMovie, 'option', dropDownMovieList)

        //Ubacivanje ukupne duzine filma
        var fullLengthofMovies = modelModulToControler;
        modelModul.appendItemLength(fullLengthofMovies, 'p', displayTotalLengthMovie)


    })

    /////////////////////////////CREATE PROGRAM///////////////////////////////

    var btnCreateProgram = document.querySelector('.create-program');
    var showProgramList = document.querySelector('.program-list');
    var dropDownProgramList = document.querySelector('.program-select');

    btnCreateProgram.addEventListener('click', function () {

        var createProgramDOM = viewModulToControler
        var date = viewModulToControler.getFullDate()
        // console.log(date);
        
        var createProgram = modelModulToControler.programCreateAdd(date);
        // console.log(createProgram);
        
        //Pozivamo metodu iz modela i i praviom paragraf i option istom funkcijom
        var displayProgramList = modelModul.appendItem(createProgramDOM, 'p', showProgramList)
        var displaydropDownProgramList = modelModul.appendItem(createProgramDOM, 'option', dropDownProgramList)


    })



    ////////////////////////ADD MOVIE TO PROGRAM /////////////////////////////
    var btnAddMovieToProgram = document.querySelector('.add-movie');

    btnAddMovieToProgram.addEventListener('click', function () {

        modelModulToControler.addMovieToProgram()
 

    })

})(viewModul, modelModul)