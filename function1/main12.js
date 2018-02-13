function penzija(godine, pol) {
    if (godine < 65 && pol === 'muski') {

        var preostaloDoPenzijeM = 65 - godine;

        return preostaloDoPenzijeM;
    } else if (godine < 60 && pol === 'zenski') {

        var preostaloDoPenzijeZ = 60 - godine;

        return preostaloDoPenzijeZ;
    } else if(godine > 65 && pol === 'muski' || godine > 60 && pol === 'zenski'){

        return "Vi ste u penziji"
    }


}

var staz = penzija(59, 'muski');

console.log(staz)