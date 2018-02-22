(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

        this.getData = function () {
            return this.name + " " + this.surname;
        };
    }

    function Seat(category) {
        this.number = Math.floor(Math.random(100 - 10) * 100);
        this.category = category || "e";

        this.getData = function () {
            return this.number + ", " + this.category;
        };
    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return this.seat.getData() + ", " + this.person.getData();
        };
    }

    function Flight(destination, date) {

        this.destination = destination;
        this.date = new Date(date);
        this.listPass = [];
        this.returnDate = function () {
            return this.date.getDate() + ". " + this.date.getMonth() + ". " + this.date.getFullYear();
        };

        this.getData = function () {
            var x = "";
            for (var i = 0; i < this.listPass.length; i++) {
                var lp = this.listPass[i];
                x += "\n\t\t" + lp.getData();
            
            }
            return this.returnDate() + " " + this.destination + x;
        };

        this.addPassenger = function (pass) {
            this.listPass.push(pass);
        };
    }

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.addFlight = function (flight) {
            this.listOfFlights.push(flight);
        };

        this.getData = function () {
            var airportF = "";
            var total = 0;

            for (var i = 0; i < this.listOfFlights.length; i++) {
                var flight = this.listOfFlights[i];
                total += flight.listPass.length;
                airportF += "\n\t" + flight.getData();
            }



            return "Airport : " + this.name + ", " + " total passenger : " + total + " " + airportF;
        };



    }





    function createFlight(dest, date) {
        return new Flight(dest, date);
    }

    function createPassenger(name1, seat1) {
        return new Passenger(name1, seat1);
    }





    var name1 = new Person("Sava", "Jankovic");
    var name2 = new Person("Nikola", "Radovic");
    var name3 = new Person("Marko", "Madovic");
    var name4 = new Person("Dikola", "Sadovic");

    var seat1 = new Seat();
    var seat2 = new Seat("b");
    var seat3 = new Seat("b");
    var seat4 = new Seat();

    var pass1 = createPassenger(name1, seat1);
    var pass2 = createPassenger(name2, seat2);
    var pass3 = createPassenger(name3, seat3);
    var pass4 = createPassenger(name4, seat4);

    var flight1 = createFlight("Belgrade - Paris", "2018-05-10");
    var flight2 = createFlight("Rim - New York", "2018-12-10");

    flight1.addPassenger(pass1);
    flight1.addPassenger(pass2);
    flight2.addPassenger(pass3);
    flight2.addPassenger(pass4);

    var air1 = new Airport();

    air1.addFlight(flight1);
    air1.addFlight(flight2);


    console.log(air1.getData());




})();




// (function () {

//     function Person(name, surname) {
//         this.name = name;
//         this.surname = surname;

//         this.getData = function () {
//             return this.name + " " + this.surname;
//         };
//     }

//     function Seat(category) {
//         this.number = Math.floor(Math.random(100 - 10) * 100);
//         this.category = category || "e";

//         this.getData = function () {
//             return this.number + ", " + this.category;
//         };
//     }

//     function Passenger(person, seat) {
//         this.person = person;
//         this.seat = seat;
//         this.getData = function () {
//             return this.seat.getData() + ", " + this.person.getData();
//         };
//     }

//     function Flight(destination, date) {

//         this.destination = destination;
//         this.date = new Date(date);
//         this.listPass = [];
//         this.returnDate = function () {
//             return this.date.getDate() + ". " + this.date.getMonth() + ". " + this.date.getFullYear();
//         };

//         this.getData = function () {
//             var x = "";
//             for (var i = 0; i < this.listPass.length; i++) {
//                 var lp = this.listPass[i];
//                 x += "\n\t\t" + lp.getData();
            
//             }
//             return this.returnDate() + " " + this.destination + x;
//         };

//         this.addPassenger = function (pass) {
//             this.listPass.push(pass);
//         };
//     }

//     function Airport() {
//         this.name = "Nikola Tesla";
//         this.listOfFlights = [];
//         this.addFlight = function (flight) {
//             this.listOfFlights.push(flight);
//         };

//         this.getData = function () {
//             var airportF = "";
//             var total = 0;
//             var passengers = [];

//             for (var i = 0; i < this.listOfFlights.length; i++) {
//                 var flight = this.listOfFlights[i];
//                 passengers = passengers.concat(flight.listPass);
                
//                 total += flight.listPass.length;
//                 airportF += "\n\t" + flight.getData();
//             }
            
//             console.log(passengers);


//             return "Airport : " + this.name + ", " + " total passenger : " + total + " " + airportF;
//         };



//     }





//     function createFlight(dest, date) {
//         return new Flight(dest, date);
//     }

//     function createPassenger(name1, seat1) {
//         return new Passenger(name1, seat1);
//     }





//     var name1 = new Person("Sava", "Jankovic");
//     var name2 = new Person("Nikola", "Radovic");
//     var name3 = new Person("Marko", "Madovic");
//     var name4 = new Person("Dikola", "Sadovic");

//     var seat1 = new Seat();
//     var seat2 = new Seat("b");
//     var seat3 = new Seat("b");
//     var seat4 = new Seat();

//     var pass1 = createPassenger(name1, seat1);
//     var pass2 = createPassenger(name2, seat2);
//     var pass3 = createPassenger(name3, seat3);
//     var pass4 = createPassenger(name4, seat4);

//     var flight1 = createFlight("Belgrade - Paris", "2018-05-10");
//     var flight2 = createFlight("Rim - New York", "2018-12-10");

//     flight1.addPassenger(pass1);
//     flight1.addPassenger(pass2);
//     flight2.addPassenger(pass3);
//     flight2.addPassenger(pass4);

//     var air1 = new Airport();

//     air1.addFlight(flight1);
//     air1.addFlight(flight2);


//     console.log(air1.getData());




// })();