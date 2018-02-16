// 1. Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

function itemCheck(arr, element) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return "Yes! Element is present!";
        } else {
            return "Nope! You are wrong!"
        }
    }

}

console.log(itemCheck([5, -4.2, 3, 7], 9));