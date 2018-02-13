// Write a function to get the first n characters and add “...” at the end of newly created string.

var text = '';
function dots(string,len){
  for(var i=0; i<len;i++){
      var arr = string.split('');
     
      text += arr[i];


  }
  console.log(text + '...');

}


dots('Nikola',3)