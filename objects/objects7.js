/*Write a function that can pad (left, right) a string to get to a determined length.

	'0000', 123, 'l' -> 0123 
'00000000', 123, '' -> 12300000 */

function padding(str,zero,) {
  
    var strNewLen = zero.length;
    return str.padStart( strNewLen,'0')
   
}


console.log(padding('123', '00000'));
