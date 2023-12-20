// else if

// let number = prompt("enter a number :");

// if (number < 0) {
//     console.log(number + " given number is negative");
// }
// else if (number > 0) {
//     console.log(number + " given number is positive");
// }
// else {
//     console.log("given number is equal to zero");
// }

// nested if

let english = 95, tamil = 45, malayalam = 45;

let total, avg;

total = english + tamil + malayalam;

avg = total / 3;

console.log("Total   : " + total);
console.log("Avarage : " + avg.toFixed(2));

if (tamil >= 35 && english >= 35 && malayalam >= 35) {
    console.log("Result  : Pass");
    if (avg > 90 && avg <= 100) {
        console.log("Grade   : A Grade");
    }
    else if (avg > 80 && avg <= 90) {
        console.log("Grade   : B Grade");
    }
    else if (avg > 70 && avg <= 80) {
        console.log("Grade   : C Grade");
    }
    else {
        console.log("Grade   : D Grade");
    }
}

else {
    console.log("Result : Fail");
    console.log("Grade  : No Grade");
}