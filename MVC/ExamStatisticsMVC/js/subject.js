// var dataModul = (function () {

//     function Subject(name) {
//         this.name = name;
//     }

//      function createSubject(name) {
//         var subject = new Subject(name);
//         return subject;
//     };


//     return {
//         createSubject: createSubject
//     }
// })()

// var x = dataModul.createSubject('rrr');
// console.log(x);

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

console.log(termodinamika);
// console.log(sub.getSubjectData());


