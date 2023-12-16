// variable

// local scope,global scope

if (true) {
    var msg = "welcome to javascript"; //globaly access
    let msg1 = "welcome to javascript"; //only access in the local
    const msg2 = "welcome to javascript"; //only access in the local
}

console.log(msg);

// redecalaration

var a = 20; //allow redeclaration
var a = 40;
console.log("value of a = " + a);
let a1 = 20; //not allow the redeclaration
const a2 = 20 //not allow the redeclaration

// value assign

var b = 20;
console.log(b);
b = 40; //allow assign value change
console.log(b);
let b1 = 20;
console.log(b1);
b1 = 40; //allow assign value change
console.log(b1);
const b2 = 20; //not allow assign value change
console.log(b2);

const student = {
    sname: "blanck",
    dep: "bca",
    college: "imayam arts and science college"
}

student.sname = "vignesh"; //const allow change assign value in object

console.table(student);