

var str = 'abc';

function concenate(multiple,str){

    for(i=0;i<multiple-1;i++){
        
         str += str;
        
    }
    console.log(str)
}

concenate(3,'abc')