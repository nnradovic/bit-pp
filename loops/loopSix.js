var grades = [80, 77, 88, 95, 68];
var averageGrade = 0;
var sum = 0;
var studentGrade = 50;

for (var i = 0; i < grades.length; i++) {
    averageGrade += grades[i];

    sum = averageGrade / grades.length;

}
    console.log(sum);

