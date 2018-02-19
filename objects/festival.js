(function () {


    // Kreiramo konstruktor za Zanr.

    function Genre(name) {
        this.name = name;
        this.getData = function () {
            var firstLetter = this.name.charAt(0);
            var lastLetter = this.name.charAt(name.length - 1);
            var result = firstLetter + lastLetter;
            return result.toUpperCase();
        }
    }

    // Kreiramo konstruktor Movie

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.getDataMovie = function () {

            return this.title + ' ' + this.genre + ' ' + this.length + "min, ";
        }
    }
    // Kreiramo konstrutor za Program

    function Program(date) {
        this.date = new Date(date);
        this.moviesList = [];

        this.addMovie = function (movie) {
            this.moviesList.push(movie);
        }
        this.getNumOfMovies = function () {
            return this.moviesList.length;

        }
        this.programLength = function () {
            var length = 0;
            for (var i = 0; i < this.moviesList.length; i++) {
                var movie = this.moviesList[i];
                length += movie.length;

            }
            return length;
        }
        this.getData = function () {
            var myDate = this.date.getFullYear();
            var output = '\t';

            output += myDate + ',' + ' program length from ' + this.programLength() + ' from all movies \n';
            for (var i = 0; i < this.moviesList.length; i++) {
                var movie = this.moviesList[i]
                output += '\t \t' + movie.getDataMovie() + '\n';
            }
            return output;
        }

    }

    // Kreiramo konstruktor za festival

    function Festival(nameFestival, totalNumOfMovies,program) {
        this.nameFestival = nameFestival;
        this.programs = [];
        this.totalNumOfMovies = totalNumOfMovies;
        this.programFestival= function(program){
            this.programs.push(program)
             
        }
        this.getDataFestival = function(){
            var final;
            final = nameFestival + ' has ' + this.totalNumOfMovies + ' movie titles';
            return final;
        }

    }

    var g1 = new Genre("Action");
    var g2 = new Genre("Comedy");
    // console.log(g1.getData());

    var m1 = new Movie("Berba cvaraka u Makedoniji", g1.getData(), 150)
    var m2 = new Movie("Indijanci kolju kupus", g2.getData(), 130)
    // console.log(m1.getDataMovie());
    // console.log(m2.getDataMovie());


    var p1 = new Program('2001');

    p1.addMovie(m1);
    p1.addMovie(m2);

    // console.log(p1.getNumOfMovies());
    // console.log(p1.programLength());
    


    var f1 = new Festival('Weekend Festival ' ,p1.getNumOfMovies())

    console.log(f1.getDataFestival() );
    console.log(p1.getData());




})();