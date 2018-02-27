// // Slide Example
// var dudeObj = {
//     job: 'Ninja',
//     say: function (who) {
//         return 'Hey ' + who + ', I am a ' + this.job;
//     }
//  };
 
//  dudeObj.say('Dude'); // "Hey Dude, I am a Ninja"
 
//  var programmerObj = { job: 'Scripting guru' };
//  var output = dudeObj.say.call(programmerObj, 'Dude');
//  console.log(output)


var personObj = {
    job:"human",
    say: function(who){
        return 'Hey ' + who + ' , I am a ' + this.job;
    }
};

personObj.say('Nikola');
// console.log(personObj.say('Nikola'));

var progamerObj = {
    job:'JavaScript'
}
// iz objekta person metodu say pozivamo na objektu progamer i dodajemo argument Milos 
var output = personObj.say.call(progamerObj, 'Milos');
console.log(output);

