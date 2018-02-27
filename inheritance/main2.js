// var john = {
//     name: "John",
//     job: "Teacher",
//     say: function (greeting) {
//         console.log(greeting + ", I'm " + this.name);
//     }
//  }
 
//  john.say("Hi");
 
//  var mara = {
//     name: "Marija"
//  }
 
//  mara.hello = john.say.bind(mara);
//  mara.hello("Hello");
 
//  mara.ola = john.say.bind(this, "Ola");
//  mara.ola();
 
//  john.say.call(mara, "Good morning");
//  john.say.apply(mara, ["Good afternoon"]);

var nikola = {
    name:'Nikola',
    job: 'Student',
    say: function (greeting){
        return console.log(greeting + ' I am ' + this.name);
        
    }
}

// nikola.say('Hi')


var marija = {
    name:'Marija'
}

//  nikosla.say.call(marija,'Cao');

// nikola.say.apply(marija, ['Pozdrav'])


// marija.ola = nikola.say.bind(marija);
// marija.ola('Hello')

marija.ola = nikola.say.bind(marija, 'Hiiii');
marija.ola()