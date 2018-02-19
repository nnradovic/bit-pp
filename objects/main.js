function Person(name, surname, yearOfBirth) {
    this.firstName = name;
    this.lastName = surname;
    this.calculateAge = function () {
        var d = new Date ();
        var year = d.getFullYear();
        var result = year - yearOfBirth;
        return result;
    }
    this.info = function () {
        return "My name is " + this.firstName + " "+ this.lastName + " and I have " + this.calculateAge();
    }
}

var milica = new Person ("Milica", "Roljic", 1992);
// console.log(milica);
console.log(milica.info());

var nikola = new Person("Nikola", "Radovic", 1981);

console.log(nikola.info());


