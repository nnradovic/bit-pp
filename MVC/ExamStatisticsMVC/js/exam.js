const dataModulSubject = (() => {

    class Subject {
        constructor(name) {
            this.name = name;

        };
        getSubjectData() {
            return this.name;
        };

    }

    function createSubject(name) {
        const subject = new Subject(name);
        return subject;
    };

    //Exspose
    return {
        createSubject: createSubject
      
    }
})();

const termodinamika = dataModulSubject.createSubject('Termodinamika')

// console.log(termodinamika);
// console.log(sub.getSubjectData());



const dataModulStudent = (()=>{

    class Student{
        constructor(name,surname){
            this.name = name;
            this.surname = surname;
        }
        getStudentData(){
            return `Name: ${this.name} Surname: ${this.surname} `;
        }
    
    }
    function createStudent(name,surname){
        const student = new Student(name,surname);
    
        return student;
    }
    
    //Exspose
    return{
        createStudent:createStudent
    }
    
    })()
    
    
    const darko = dataModulStudent.createStudent('Darko','Dedovic');
    // console.log(darko);
    
const dataModulExam = (() => {

    class Exam {
        constructor(subjectObj, studentObj, grade) {
            this.grade = grade;
            this.subjectObj = subjectObj;
            this.studentObj = studentObj;
        }
        getexamInfo() {
            return `Exam: ${this.subjectObj.getSubjectData()} ,  ${this.studentObj.getStudentData()} grade: ${this.grade}`;
        }
        hasPassed() {
            
            if (this.grade > 5) {
                return  true;
            } else {
                return false;
            }
        }

    }

    function createExam(subjectObj, studentObj, grade){
        const exam = new Exam(subjectObj, studentObj, grade);
        return exam;
    }
    return{
        createExam:createExam
    }

})();
// const termodinamika = dataModulSubject.createSubject('Termodinamika')
// const darko = dataModulStudent.createStudent('Darko','Dedovic');
console.log(termodinamika);
console.log(darko);


const exam = dataModulExam.createExam(termodinamika,darko,6);
console.log(exam.getexamInfo());
console.log(exam.hasPassed());

