

function convert(str, sep) {

    var arr = str.split('');
    for (i = 0; i < arr.length; i++) {



        if(arr[i] === ' ' && typeof sep === 'undefined'){
            arr[i] = '-';
        }else if(arr[i] === ' '){
            arr[i] = sep;
        }
        console.log(arr);

    }
}

    convert('My random string')