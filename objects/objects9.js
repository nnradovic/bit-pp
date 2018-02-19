// Write a function to hide email addresses to protect them from unauthorized users.


function protectEmail(email) {
    
    var position = email.indexOf('@');

    var newEmail = email.slice(position, position.length);

    return   "..." + newEmail ;


}


console.log(protectEmail('nnradovic@gmail.com'));
