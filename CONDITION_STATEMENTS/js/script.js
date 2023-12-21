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

// console.log("--------------------------------------");

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

console.log("--------------------------------------");

// switch case

let num = 2;

switch (num) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    default:
        console.log("Not a number!");
        break;
}

console.log("--------------------------------------");

// combining case switch

let letter = 'p';

switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log(letter + " is a vowel");
        break;
    default:
        console.log(letter + " is not a vowel!");
        break;
}

console.log("--------------------------------------");

// while

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

console.log("--------------------------------------");

// do while

let table = 3; limit = 10; j = 1;

do {
    console.log(table + " X " + j + " = " + (table * j));
    j++;
}
while (j <= limit);

console.log("--------------------------------------");

// for

let arr = [];
for (let k = 0; k < 50; k++) {
    arr.push(k);
}
console.log(arr);

console.log("--------------------------------------");

// nesteded for loop

let nums = [];

for (let I = 0; I < 5; I++) {
    nums.push([]);
    for (let J = 0; J < 5; J++) {
        nums[I].push(J);
    }
}
console.table(nums);

console.log("--------------------------------------");

// for of loop

let names = ['ajay', 'krish', 'vasanth', 'vignesh', 'dinesh', 'boobesh', 'vinith'];

for (let name of names) {
    console.log(name);
}

console.log("--------------------------------------");

// for in loop

let user = {
    username: 'vignesh',
    dep: 'bca',
    age: 23,
    city: 'trichy',
    contact: 9677579718
}

for (let prop in user) {
    console.log(prop + " : " + user[prop]);
}

console.log("--------------------------------------");
