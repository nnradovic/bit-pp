// 3. Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
//    51-60 -> 6,
//    61-70 -> 7,
//    71-80 -> 8,
//    81-90 -> 9,
//    91-100 -> 10.
//    Input : [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39,        63, 72, 99, 51, 83, 59 ]
//    Output: Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to           complete the exam.
"use strict"

function studentGrade(inputName, inputMark) {
    var output = "";
    var result = "";
    var grade = 0;

    for (var i = 0; i < inputMark.length; i++) {
        grade = (inputMark[i] - 1) / 10;
        grade = parseInt(grade) + 1;
        if (grade < 6) {
            grade = "failed!"
        }
        result = inputName[i] + " has aquired " + inputMark[i] + " points, and " + grade; 
        output += result + "\n";
    }
    return output;
}

console.log(studentGrade([ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ],[ 50, 39, 63, 72, 99, 51, 83, 59 ]));

