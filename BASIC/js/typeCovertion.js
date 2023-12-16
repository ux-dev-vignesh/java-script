// type conversion

// To string
// method 1
let a = 25;
a = a.toString();
console.log(a, typeof a);
// method 2
let b = 25;
b = String(b);
console.log(b, typeof b);

// To number
// method 1
a = "125";
a = Number(a);
console.log(a, typeof a);
// method 2
b = "22.5";
b = parseFloat(b);
console.log(b, typeof b);
// method 3
c = "22.5";
c = parseInt(c);
console.log(c, typeof c);
