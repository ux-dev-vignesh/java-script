// arithematic operators

let num1 = 20;
let num2 = 5;

// add
let ans1 = num1 + num2;
// sub
let ans2 = num1 - num2;
// mul
let ans3 = num1 * num2;
// div
let ans4 = num1 / num2;
// mod --reminder
let ans5 = num1 % num2;
// power
let ans6 = num2 ** 3;
// increment
let ans7 = ++num1;
let ans8 = num2++;
// decrement
let ans9 = --num1;
let ans10 = num2--;

console.log(ans1);

console.log('*************************');

// assignment operators

let a = 10;

// add
let val1 = a += 5;
// sub
let val2 = a -= 5;
// mul
let val3 = a *= 5;
// div
let val4 = a /= 5;
// mod
let val5 = a %= 5;

console.log(val1);

console.log('*************************');

// comparison operator

let num3 = 20;
let num4 = '20';

// equal
console.log(num3 == num4); //not consider data types
console.log(num3 === num4); //consider data types
// not equal
console.log(num3 != num4);

console.log('*************************');

//relational operator

let num5 = 20;
let num6 = 10;

// greater than
console.log('greater:', num5 > num6);
// greater than or equal
console.log('greater then or equal:', num5 >= num6);
// less than 
console.log('lesser:', num5 < num6);
// less than or equal
console.log('less than or equal:', num5 <= num6);

console.log('*************************');

// logical operator

let mark = 45;
let pass = false;

// and 
console.log(mark >= 35 && mark <= 100);
// or
console.log(mark == 35 || mark == 45);
// not
console.log(!pass);

console.log('*************************');

// strict equality operator identity operator

let num7 = 10;
let num8 = '10';

console.log(num7 === num8);

console.log('*************************');

// ternary operator

let age = 22;

const result = age >= 18 ? 'eligible' : 'not eligible';

console.log(result);

// example 1
function welcome(username) {
    const res = username ? username : "No Name";
    console.log("Welcome", res);
}
welcome(null);
//example 2
user = {
    username: 'vignesh',
    dep: 'bca',
    age: 23
}

const greeting = (user) => {
    const name = user.username ? user.username : "NO Name";
    return "Hello " + name;
}

console.log(greeting(user));

// conditional chains
const avg = 89;
const grade = avg >= 85 ? "A GRADE" : avg >= 70 ? "B GRADE" : avg >= 50 ? "C GRADE" : avg >= 35 ? "D GRADE" : "FAILL";
console.log("GRADE: " + grade);

console.log('*************************');

// bitwise operator

// and
const num11 = 2;
const num12 = 3;
console.log('bitwise and: ' + (num11 & num12));
/*
0010  2
0011  3
--------
0010  2
*/

// or
const num13 = 12;
const num14 = 24;
console.log('bitwise or: ' + (num13 | num14));
/*
0000 1100  12
0001 1000  24
--------------
0001 1100  28
*/

// not (~a=-a-1)
let num15 = 25;
console.log('bitwise not: ' + (~num15));

// xor
let num16 = 2;
let num17 = 3;
console.log("bitwise xor: " + (num16 ^ num17));

// left shift
let num18 = 5;
let num19 = 2;
console.log("left shift: " + (num18 << num19));

let num20 = 6;
console.log("left shift: " + (num20 << num19));

// right shit
console.log("right shift: " + (num18 >> num19));

// nullish coalescing operator
const num21 = null ?? 'no value';
console.log("nullish: " + num21);

const user1 = { uname: 'vignesh' }
user1.city ??= 'trichy';
console.log("user city: " + user1.city);