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
console.log(darko);

