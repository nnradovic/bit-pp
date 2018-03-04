//Pravimo konstruktor Persona

function Person(name, surname) {
    this.id = Math.floor(Math.random() * 1000);
    this.name = name;
    this.surname = surname;
}

Person.prototype.getData = function () {
    return 'Id: ' + this.id + ' Name: ' + this.name + ' Surname: ' + this.surname;
}



// var darko = new Person('Darko', 'Dedovic');
// console.log(darko.getData());


//Pravimo konstruktor za Empoloyee

function Empoloyee(name, surname, salary) {
    Person.call(this, name, surname);
    this.salary = salary;

}

Empoloyee.prototype = Object.create(Person.prototype);
Empoloyee.prototype.constructor = Empoloyee;

Empoloyee.prototype.getData = function () {
    return 'Id: ' + this.id + ' Name: ' + this.name + ' Surname: ' + this.surname + ' salary: ' + this.salary;
}

// var darkoEmpoloyee = new Empoloyee('Darko', 'Dedovic', 444000);
// console.log(darkoProfesor.getData());


//Pravimo konstruktor za Preofesora

function Profesor(name, surname, salary, officeNum) {
    Empoloyee.call(this, name, surname, salary)
    this.officeNum = officeNum;
}

Profesor.prototype = Object.create(Empoloyee.prototype);
Profesor.prototype.constructor = Profesor;

Profesor.prototype.getData = function () {
    return 'Id: ' + this.id + ' Name: ' + this.name + ' Surname: ' + this.surname + ' salary: ' + this.salary + ' office Number: ' + this.officeNum;
}
Profesor.prototype.getProfInfo = function () {
    return 'Id: ' + this.id + '; Name: ' + this.name + '; Surname: ' + this.surname + '; office Number: ' + this.officeNum;
}

// console.log(darkoProf.getData());

// var createProfesor = function(name, surname, salary,officeNum){
//     new Profesor(name, surname, salary,officeNum);
// }


//Napravi konstruktor Student

function Student(name, surname, indexNum, studStatus) {
    Person.call(this, name, surname);
    this.indexNum = indexNum;
    this.passOfExam = [];
    this.studStatus = studStatus;

}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.getData = function () {
    return ' Name:  ' + this.name + '  Surname:  ' + this.surname + ' index number:  ' + this.indexNum + '  student status: ' + this.studStatus + this.getAllExam();
}
Student.prototype.addExam = function (passExam) {
    this.passOfExam.push(passExam);
}

Student.prototype.getAllExam = function(){
    var result = '';
    for(var i=0; i<this.passOfExam.length;i++){
        result += this.passOfExam[i].getExamData() +'\n';
    }
    return result;
}
var STUDENT_STATUS = Object.freeze( {
    REGULAR: "regular",
    REMOTE: "remote",
    GRADUATED: "graduated"

});

var listOfExams = Object.freeze({
    TERMOTEHNIKA: "TERMOTEHNIKA",
    MATEMATIKA: "MATEMATIKA",
    MEHANIKAFLUIDA: "MEHANIKAFLUIDA"

})


// console.log(nikola.getData());

//Paravimo polozen ispit konstruktor

function Passexam(listOfExams, date, grade, profesor) {
    this.listOfExams = listOfExams;
    this.date = new Date(date);
    this.grade = grade;
    this.profesor = profesor;
}

Passexam.prototype.addDate = function () {
    return this.date.getDate() + '.' + this.date.getMonth() + '.' + this.date.getFullYear();
}

Passexam.prototype.getExamData = function () {
    return " \n Exam: " + this.listOfExams + " date: " + this.addDate() + "; grade: " + this.grade + ";\n Profesor: " + this.profesor.getProfInfo();
}
Passexam.prototype.addProfesor = function (addprof) {
    return this.profesor = addprof;
}


Passexam.prototype.numberOfTen = function () {
    var ten = 0;
    if(this.grdade === '10'){
         ten++;
    }
    return ten;
}


// var termoTehnika = new Passexam(listOfExams.TERMOTEHNIKA, '23 May 2016', 6, darkoProf);
// var matematika = new Passexam(listOfExams.MATEMATIKA, '25 May 2016', 6, darkoProf);
// var nikola = new Student("Nikola", "Radovic", "2001", status.REGULAR);
// nikola.addExam(termoTehnika);
// nikola.addExam(matematika)
// console.log(nikola.getData());