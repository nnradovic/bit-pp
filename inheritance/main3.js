


function Person(name, surname) {
    this.name=name,
    this.surname=surname,
    this.info = "I am super"
}

Person.prototype.fullName = function(){
    return this.name + ' ' + this.surname;
}

Person.prototype.getInfo = function(){
    return console.log(this.info);
    
}

// var nikola = new Person('Nikola', 'Radovic')
// nikola.getInfo()


function Programmer(name, surname, company, language){
    // pozivamo nad ovim(this) Programerom, konstruktor Person i argumente name i surname
    Person.call(this, name,surname);
    this.company = company;
    this.language = language;
    
}
//Programer prototype dobija prototype od Persona
 Programmer.prototype = Object.create(Person.prototype);
 //Programerov konstruktor je jednak progamerovom konstruktoru
 Programmer.prototype.constructor = Programmer;

Programmer.prototype.getInfo = function(){
    //Person prototype fullName se doziva nad ovim(this) Programerom
    var fullName = Object.create(Person.prototype).fullName.call(this);
    console.log(fullName + ' '+ this.company + ' ' + this.language);
    
}

var programer = new Programmer('Nikola', 'Radovic', 'Bit', 'JavaScript');

programer.getInfo()