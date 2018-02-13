


var lineTop = '';
var lineBottom = '';
function hLine(number) {
    //TOP OF THE SQ
    for (var i = 0; i < number; i++) {

        lineTop += '*';

    }
    console.log(lineTop)

    //SIDE LINE
    for (j = 0; j < (number - 2); j++) {

        var dot = '*';

        for (var i = 0; i < (number - 2); i++) {

            dot += ' ';

        }

        dot += '*';
        dot += '\n';

        console.log(dot)
    }
    //BOTTOM OF THE SQ
    for (var i = 0; i < number; i++) {

        lineBottom += '*';

    }
    console.log(lineBottom)    



}

hLine(15);