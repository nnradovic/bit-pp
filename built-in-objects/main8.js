// Write a function that calculates a number of days to your birthday.
// Input: 25 February 
// Output: 5 days

function calculateBirthdday(today, birthday) {

    // Danasnji dan i mesec
    var date = new Date(today);
    var month = date.getMonth();

    var today = today.split(' ')
    today[0];


    // Dan rodjenja i mesec
    var dateB = new Date(today);
    var monthB = date.getMonth();

    var dayB = birthday.split(' ')
    dayB[0];

    return (dayB[0]-today[0]) + ' days'



}


console.log(calculateBirthdday('20 February', '28 February'));