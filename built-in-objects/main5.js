// Write a function that finds all the elements in a given array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]
// Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
// 		Input: [’JavaScript’, ’rograpromming’, ’fun’, ’product’] 
// 	Output: [’Programming’, ‘product’]

// Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it.

//////////////////////////////////////////////////////////////////
// function findEl(arr, num) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < num) {
//             var element = arr[i];
//             newArr.push(element);
//         }
//     }
//     return newArr;
// }
// console.log(findEl([2, 3, 8, -2, 11, 4], 6));

////////////////////////////////////////////////////////////////////
// function findWord(arr,input){
//     var match =[];
//     for(var i=0; i<arr.length;i++){
//         match[i] = arr[i].search(input);
//         if( match[i] !== -1){
//             match[i] =arr[i];

//         }

//     }

//     return match


// }

// console.log(findWord(['JavaScript', 'programming', 'fun', 'product'], 'pro'));

///////////////////////////////////////////////////////////////
// var newArr = [];

// function findEl(arr, num, checkNum) {

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < num) {
//             var element = arr[i];
//             checkNum(element);
//         }
//     }
//     return newArr;
// }

// function checkNum(element) {

//     newArr.push(element);

// }


// console.log(findEl([2, 3, 8, -2, 11, 4], 6, checkNum));