
// Bookmaker’s

// In your IDE of choice, create a new JavaScript file named booking-house.js and make it so that all code written in the file follows JS strict mode.

// Create an anonymous immediately-invoking function that will hold main execution of all program calls. Make sure that functions that you write in this function are pure functions.

// Create constructor functions with properties representing the following:
// Country - name, odds, continent (EU, AS, AF, SA, NA, AU)
// Person - name, surname, date of birth
// Player - person, bet amount, country (instance of Country)
// Address - country, city, postal code, street and number
// BettingPlace - address and list of players (initially empty)
// BettingHouse - competition, list of betting places (initially empty) and number of players

// Create continents as constants (objects that can not change). So, when passing a continent as a parameter, you should pass Continent.ASIA.

// Add a method to Person that returns a formatted string containing the name, surname and date of birth of the person (date of birth in dd.mm.yy format).

// Add a method to Address that returns a formatted string like the following one:
// 	Nemanjina 4, 11000 Beograd, SR

// Add a method to Player that returns a formatted string containing a country, expected win amount (odds * bet amount) and person data.
// SR, 1050.00 eur, Pera Peric, 29 years

// Add a method to BettingPlace that returns a formatted string containing a street (without a number), postal code and city, and sum of all bet amounts of that place.
// Nemanjina, 11000 Belgrade, sum of all bets: 50000eur

// Add a method to BettingPlace that adds a player to the players list of a betting place. 

// Inside your immediately-invoking function, add a function that returns a created Player.

// Inside your immediately-invoking function, add a function that creates a BettingPlace.

// Create an instance of the BettingHouse that receives the name of competition.

// Create four players with random data. Create two betting places. Add created players as you wish to Betting places. Add betting places to the betting house.

// Display all betting house data in the following manner:




// Football World Cup Winner, 2 betting places, 4 bets
// 	Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// 		SR, 1050.00 eur, Pera Peric, 29 years
// 		SR, 1050.00 eur, Pera Peric, 29 years
// Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// 		GR, 1050.00 eur, Pera Peric, 29 years
// 		SR, 1050.00 eur, Pera Peric, 29 years
// There are 3 bets on Serbia

(function () {


    // Country - name, odds, continent (EU, AS, AF, SA, NA, AU)
    // Create continents as constants (objects that can not change). So, when passing a continent as a parameter, you should pass Continent.ASIA.
    function Country(name, odds, continent) {

        this.name = name;
        this.odds = odds;
        this.continent = continent;
        //Pravimo metodu za Country;
        this.stickerCountry = function () {
            return (this.name[0] + this.name[name.length - 1]).toUpperCase();
        }
    }
    //Pravimo objecat koji ima samo konstante
    var continents = Object.freeze({
        ASIA: "AS",
        EUROPE: "EU"
    });



    // Person - name, surname, date of birth
    // Add a method to Person that returns a formatted string containing the name, surname and date of birth of the person (date of birth in dd.mm.yy format).
    function Person(name, surname, date) {

        this.name = name;
        this.surname = surname;
        this.currentDate = new Date().getFullYear();
        this.yearOfBirth = new Date(date)
        this.yearOld = function () {
            return (this.currentDate - new Date(date).getFullYear());
        }
        this.getDateofBitrth = function () {
            return new Date(date).getDate() + '.' + new Date(date).getMonth() + 1 + '.' + new Date(date).getFullYear();
        }
        this.getData = function () {
            return this.name + ' ' + this.surname + ', ' + this.yearOld();
        }
    }


    // Add a method to Address that returns a formatted string like the following one:
    // 	Nemanjina 4, 11000 Beograd, SR

    function Address(street, postalcode, country) {
        this.street = street;
        this.postalcode = postalcode;
        this.fullAddress = function (country) {
            return this.street + ', ' + this.postalcode + ', ' + country.stickerCountry();
        }

    }

    // Add a method to Player that returns a formatted string containing a country, expected win amount (odds * bet amount) and person data.
    // SR, 1050.00 eur, Pera Peric, 29 years 

    function Player(person, betamount, country) {
        this.betamount = betamount;
        this.person = person;
        this.country = country;   
        this.getData = function (person, country) {
              return this.country.stickerCountry() +', '+ this.betamount*this.country.odds + ', ' +  this.person.getData();
        }
    }
    // Add a method to BettingPlace that returns a formatted string containing a street (without a number), postal code and city, and sum of all bet amounts of that place.
    // Nemanjina, 11000 Belgrade, sum of all bets: 50000eur
    // Add a method to BettingPlace that adds a player to the players list of a betting place.

    function BettingPlace(address){
       this.address = address;
       this.listOfPlayers = [];
       this.sumOfAllBets = function () {
           var result = 0;
           this.listOfPlayers.forEach(function(element){
                result += element.betamount;
           })
           return result;
       }

       this.sumAllBets = function(){
           var result = 0;
           this.listOfPlayers.forEach(function(element){
               result += element.betamount*element.country.odds;
           })
       }

       this.addPlayer = function(player){
           this.listOfPlayers.push(player)
       }

       this.getData = function(){
           return this.address.street + ', ' + this.address.postalcode + ' ' + ' sum of all methods ' + this.sumOfAllBets();
       }

    }


        
    // Create an instance of the BettingHouse that receives the name of competition.

   // Create four players with random data. Create two betting places. Add created players as you wish to Betting places. Add betting places to the betting house.

   // Display all betting house data in the following manner:
    // Football World Cup Winner, 2 betting places, 4 bets
    // 	Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
    // 		SR, 1050.00 eur, Pera Peric, 29 years
    // 		SR, 1050.00 eur, Pera Peric, 29 years
    // Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
    // 		GR, 1050.00 eur, Pera Peric, 29 years
    // 		SR, 1050.00 eur, Pera Peric, 29 years
    // There are 3 bets on Serbia

    function BettingHouse(competition){
        this.competition = competition;
        this.listOfPlayers = [];
        this.sumAllBets = 0;
        this.numberOfPlayers = 0;

        this.addBettingPlace = function(BettingPlace){
            this.listOfPlayers.push(BettingPlace);
            this.numberOfPlayers = BettingPlace.listOfPlayers.length;
            this.
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////
    //Pravimo instance za drzavu, unosimo ime drzave, kvotu i kontinent sa kojeg je drzava;
    var serbia = new Country('Serbia', 3, continents.EUROPE);
    var montenegro = new Country('Montenegro', 3, continents.EUROPE);
    console.log(serbia.stickerCountry());
    console.log(montenegro.stickerCountry());


   // Add a method to BettingPlace that returns a formatted string containing a street (without a number), postal code and city, and sum of all bet amounts of that place.
   // Nemanjina, 11000 Belgrade, sum of all bets: 50000eur
   // Add a method to BettingPlace that adds a player to the players list of a betting place. 



    //Pravimo instancu osobe ime i prezime, starost;
    var nikola = new Person('Nikola', 'Radovic', '1981-01-01');
    var darko = new Person('Darko', 'Dedovic', '1986-05-13');
    var nemanja = new Person('Nemanja', 'Stojanovic', '1984-12-5');
    var milorad = new Person('Milorad', 'Markovic', '1978-04-13');
    // console.log(nikola.getData())
    // console.log(darko.getData());

    //Pravimo instancu dve adrese;
    var address = new Address('Danila Srdica 2', '11070 Novi Beograd', serbia)
    var address = new Address('Trinesti jul 15', '80000 Podgorica', montenegro);
    address.fullAddress(serbia);

    // console.log(address.fullAddress(montenegro));

    //Pravimo instancu igraca
    var player1 = new Player(nikola, 1200, serbia);
    player1.getData(nikola,serbia);

    // var player2 = new Player(1800);
    // player2.getData(darko,montenegro);

    // var player3 = new Player(1200);
    // player3.getData(nemanja,serbia);

    // var player4 = new Player(4200);
    // player4.getData(milorad,serbia)

    // console.log(player1.getData(nikola,serbia));
     

    var betPlace = new BettingPlace(address);
    betPlace.addPlayer(player1);
    console.log(betPlace.getData(player1));

   
})()


