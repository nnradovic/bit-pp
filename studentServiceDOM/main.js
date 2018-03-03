//FORMA STUDENT

var createStudentBtn = document.querySelector('#createStudent');
//Pravljene drop-downa za Status
var option = document.createElement('option');
var studentStatus = document.querySelector('#studentStatus');
var firstShow = document.querySelector(".firstShow");

option.textContent = STUDENT_STATUS.REGULAR;
option.value = STUDENT_STATUS.REGULAR;
studentStatus.appendChild(option);

function createStudent(name, surname, indexNum, studStatus) {
    //Selektovanje
    var studentName = document.querySelector('#studentName').value;
    var studentSurname = document.querySelector('#studentSurname').value;
    var studentNumber = document.querySelector('#studentNumber').value;
    var studentStatusvalue = studentStatus.value;
    var student = new Student(studentName,studentSurname,studentNumber, studentStatusvalue)
 
    
};

createStudentBtn.addEventListener('click', createStudent)