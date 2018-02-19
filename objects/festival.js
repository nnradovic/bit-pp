(function () {


    // Kreiramo konstruktor za Zanr.

    function Genre(name) {
        this.name = name;
        this.getData = function () {
            var firstLetter = this.name.charAt(0);
            var lastLetter = this.name.charAt(name.length -1);
            var result = firstLetter + lastLetter; 
            return result.toUpperCase(); 
              }
    }

    // Kreiramo konstruktor Movie

     function Movie(title,genre,length) {
         this.title = title;
         this.genre = genre;
         this.length = length;
         this.getDataMovie = function () {

             return this.title + ' ' + this.genre + ' ' +  this.length+"min, ";
         }
     }
    // Kreiramo konstrutor za Program

    function Program(date,numOfMovies) {
        this.date = new Date(date);
        this.movies = [];
        this.numOfMovies = numOfMovies;
        this.addMovie = function(){
            
        }
    }
    
    // Kreiramo konstruktor za festival

    function Festival(nameFestival,totalNumOfMovies) {
        this.nameFestival = nameFestival;
        this.programs = [];
        this.totalNumOfMovies = totalNumOfMovies;
    }

    var g1 = new Genre("Action");
    var m1 = new Movie("Berba cvaraka u Makedoniji", g1.getData() , 130)
   
    
    console.log(m1.getDataMovie());
    
    
    
  
    
})()