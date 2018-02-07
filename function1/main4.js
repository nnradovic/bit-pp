


var count = 2;

function checkDuplicate(rec, trazenoSlovo) {

    var brojPonavljanja = 0;
    for (var i = 0; i < rec.length; i++) {

        var trenutnoSlovo = rec[i]
        if (trenutnoSlovo === trazenoSlovo) {
            brojPonavljanja++
        }
    }

    return brojPonavljanja;
}

var inputLetter = 'o';
var str = "urosdoooooorcol";


console.log(checkDuplicate(str, inputLetter))