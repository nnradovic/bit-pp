var arrofStudents =[];
var arrofProfesors = [];

//FORMA STUDENT

var createStudentBtn = document.querySelector('#createStudent');


//Pravljene drop-downa za Status ///
var option = document.createElement('option');
var studentStatus = document.querySelector('#studentStatus');
option.textContent = STUDENT_STATUS.REGULAR;
option.value = STUDENT_STATUS.REGULAR;
studentStatus.appendChild(option);
/////////////////////////////////////


//STUDENT
var firstShow = document.querySelector(".firstShow");
var olStudent = firstShow.querySelector('ol');
var counter = 0;
var dropStudents;
var optionStudent

function createStudent(name, surname, indexNum, studStatus) {
    counter++;
    //Selektovanje vrednosti i kreiranje studenta pomocu konstruktora;
    var studentName = document.querySelector('#studentName').value;
    var studentSurname = document.querySelector('#studentSurname').value;
    var studentNumber = document.querySelector('#studentNumber').value;
    var studentStatusvalue = studentStatus.value;
    var student = new Student(studentName, studentSurname, studentNumber, studentStatusvalue)

    //Dodavanje studneta u listu
    var liStudent = document.createElement('li');
    liStudent.id = counter
    liStudent.textContent = student.getData()
    olStudent.appendChild(liStudent)

    //Pojavlivanje studenta u listi Passed Exam;
    optionStudent = document.createElement('option');
    dropStudents = document.querySelector('.dropstudents');
    optionStudent.value = counter;
    optionStudent.textContent = student.getData();
    dropStudents.appendChild(optionStudent);
    
    arrofStudents.push(student)
};

createStudentBtn.addEventListener('click', createStudent)

// FORMA PROFESOR 

var createProfesorBtn = document.querySelector('#createProfessor');

//PROFESOR

var secondShow = document.querySelector(".secondShow");
var olProfesor = secondShow.querySelector('ol');
var counterProf = 0;
var liProfesor;
var optionProfesor;
function createProfesor(name, surname, salary, officeNum) {
    counterProf++;
    //Selektovanje vrednosti i kreiranje profesora pomocu konstruktora;
    var profesorName = document.querySelector('#professorName').value;
    var profesorSurname = document.querySelector('#professorSurname').value;
    var salary = document.querySelector('#salary').value;
    var officeNumber = document.querySelector('#officeNumber').value;
    var profesor = new Profesor(profesorName, profesorSurname, salary, officeNumber)
    console.log(profesorName, profesorSurname, salary, officeNumber);

    //Dodavanje profesora u listu
     liProfesor = document.createElement('li');
    liProfesor.value = counterProf
    liProfesor.textContent = profesor.getData()
    olProfesor.appendChild(liProfesor)

    //Pojavlivanje profesora u listi Passed Exam;
    optionProfesor = document.createElement('option');
    var dropProfesors = document.querySelector('.dropprofesors');
    optionProfesor.value = counterProf
    optionProfesor.textContent = profesor.getProfInfo();
    dropProfesors.appendChild(optionProfesor);

    arrofProfesors.push(profesor)

};

createProfesorBtn.addEventListener('click', createProfesor)



// PASSED EXAM

var addPasedExamBtn = document.querySelector('#addToList');


function addPasedExam() {


    var listOfExams = document.querySelector('.exams').value;
    var grade = document.querySelector('.grade').value;
    var date = document.getElementById('date').value;
    var profesor  = document.querySelector('.dropprofesors').value;
    var chosenStudent  = document.querySelector('.dropstudents').value;

    var indexArrOfProfesor = optionProfesor.getAttribute('value');
    
    var passedExam = new Passexam(listOfExams, date, grade, arrofProfesors[indexArrOfProfesor-1])

    var indexArrofStudents = optionStudent.getAttribute('value');
    console.log(indexArrofStudents);
    
    arrofStudents[indexArrofStudents-1].addExam(passedExam);
    // var nikola = new Student("Nikola", "Radovic", "2001", status.REGULAR);
    // nikola.addExam(passedExam);

    // passedExam.numberOfTen()

    //  console.log(passedExam.numberOfTen());
     
    // console.log(nikola.getData());

    // dropStudents.value
    // console.log(dropStudents.value);

    //Parent Node;
    olStudent;
    //Kreiramo novi node
    var newNode = document.createElement('li');
    //Kreiramo novi node Text
    var newNodeText = document.createTextNode( arrofStudents[indexArrofStudents-1].getData());
    //Ubacujemo text u elemnet
    newNode.appendChild(newNodeText);
    // console.log(newNode);
    

    //Uzimamo postojeci programIndex i pretvaramo ga u string on ce biti id stari koji cemo zameniti
    var nodeIndex = dropStudents.value + '';
    // console.log(nodeIndex);
    
    //Selektujemo stari node koji ima id koji je jednak postojecem programIndexu
    var oldNode = document.getElementById(nodeIndex)
    // console.log(oldNode);
    

    //Zameni staru node,novim
    olStudent.replaceChild(newNode, oldNode);

}


addPasedExamBtn.addEventListener('click', addPasedExam);

