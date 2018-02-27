// Employees and Managers

// Create constructor functions with properties representing the following:
// Employee: name, surname, specialization, salary
// Manager: name, surname, department, salary

// All employees should inherit method:
// getSpecialization which prints out the name of the specialization

// All managers should inherit methods:
// getDepartment which prints out the name of the department
// changeDepartment which sets the department value on the given value

// All employees and managers should inherit methods:
// getData which prints out the name and surname 
// getSalary which prints out the salary
// increaseSalary which increases the salary by 10%

function Employee(name, surname, specialization, salary) {

    this.name = name;
    this.surname = surname;
    this.specialization = specialization;
    this.salary = salary;
}

Employee.prototype.getSpecialization = function () {
    console.log(this.specialization);

}

Employee.prototype.getData = function () {
    console.log(this.name + ' ' + this.surname);

}

Employee.prototype.getSalary = function () {
    console.log(this.salary);

}
Employee.prototype.increaseSalary = function () {
    console.log((this.salary * 1.1).toFixed(0));

}


var nikola = new Employee('Nikola', 'Radovic', 'HVAC', 98000)
// nikola.getData()

function Manager(name, surname, department, salary) {
    this.name = name;
    this.surname = surname;
    this.department = department
    this.salary = salary;
}

Manager.prototype.getDeparment = function () {
    console.log(this.department);

}

Manager.prototype.changeDepartment = function (department) {
    return this.department = department || 'rema';
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getData = function () {
    return Object.create(Employee.prototype).getData.call(this);
}

Manager.prototype.getSalary = function () {
    return Object.create(Employee.prototype).getSalary.call(this);
}
Manager.prototype.increaseSalary = function () {
    return Object.create(Employee.prototype).increaseSalary.call(this);
}

var nemanja = new Manager('Nemanja', 'Radovic', 'Rema', 120000)
console.log(nemanja.getData());
console.log(nemanja.getSalary());
console.log(nemanja.increaseSalary());