// The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// Starvation: less than 15
// Anorexic: less than 17.5
// Underweight: less than 18.5
// Ideal: greater than or equal to 18.5 but less than 25
// Overweight: greater than or equal to 25 but less than 30
// Obese: greater than or equal to 30 but less than 40
// Morbidly obese: greater than or equal to 40



function bodyMassIndex(weight, height) {
    var result = weight / (height * height);

    if (result < 15) {
        console.log("Starvation");
    } else if (result < 17.5 && result > 15) {
        console.log("Anorexic");
    } else if (result > 17.5 && result < 18.5) {
        console.log("Underweight");
    } else if (result > 18.5 && result < 25) {
        console.log("Ideal");
    }
    else if (result > 25 && result < 30) {
        console.log("Overweight");
    }
    else if (result > 30 && result < 40) {
        console.log("Obese");
    }
    else if (result > 40) {
        console.log("Morbidly");
    }
}

bodyMassIndex(100,1.95)