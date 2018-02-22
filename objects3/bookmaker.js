(function () {
    'use strict'

    function Country(name, country, odds) {
        this.name = name;
        this.country = country;
        this.odds = odds;
        this.getData = function () {
            return (this.country[0] + this.country[this.country.length - 1]).toUpperCase();
            this.odds = odds;
        }

    }

    function Person(name, surname, date) {
        this.name = name;
        this.surname = surname;
        this.date = date;
        this.playerYear = function () {
            return (new Date().getFullYear() - new Date(date).getFullYear());
        }
        this.getData = function () {
            return this.name + ' ' + this.surname + ' ,' + this.playerYear() + ' years';
        }


    }
    // Add a method to Player that returns a formatted string containing a country, 
    // expected win amount (odds * bet amount) and person data.
    // SR, 1050.00 eur, Pera Peric, 29 years

    function Player(amount) {
        this.amount = amount;

        this.getData = function (country, person) {
            this.person = person;
            this.country = country;
            return (this.country.getData() + ', ' + this.amount*this.country.odds + ', ' + this.person.getData());
        }
    }

    function Address(street, postalcode) {
        this.street = street;
        this.postalcode = postalcode;


        this.addressOfPlayer = function (contryCode) {
            this.contryCode = contryCode;
            return (this.street + ' ,' + this.postalcode + ', ' + this.contryCode);
        }
    }

    var serbia = new Country('Football World Cup Winner', 'Serbia', 3);
    // console.log(serbia.getData());

    var person = new Person('Marko', 'Markovic', '23 Feb 1982');
    // console.log(person.getData());

    var addressperson = new Address('Danila Srdica 2', '11070 Novi Beograd')
    addressperson.addressOfPlayer(serbia.getData())
    console.log(addressperson.addressOfPlayer(serbia.getData()));


    var player = new Player(1500);
    console.log(player.getData(serbia, person));



})()

